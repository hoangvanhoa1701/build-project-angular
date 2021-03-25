import { Injectable } from '@angular/core';

export interface StorageInterface {
  getValue(key: string): string;
  setValue(key: string, value: string): void;
  remove(key: string): void;
  removeAll(key: string): void;
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storage!: Storage;

  constructor() {
    if (!window.localStorage) {
      console.error('Current browser does not support Local Storage');
      return;
    }
    this.storage = window.localStorage;
  }

  getValue(key: string): string {
    return this.storage.getItem(key) || '';
  }

  setValue(key: string, value: string): void {
    this.storage.setItem(key, value);
  }

  setValueAsObject(key: string, value: any): void {
    this.setValue(key, JSON.stringify(value));
  }

  getValueAsObject<T = any>(key: string): T | null {
    return JSON.parse(this.getValue(key)) as T;
  }

  remove(key: string): void {
    this.storage.removeItem(key);
  }

  removeAll(): void {
    this.storage.clear();
  }
}
