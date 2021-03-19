import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Layout } from '@app/layout.enum';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private loading = new BehaviorSubject<boolean>(true);
  loading$ = this.loading.asObservable();

  private layout = new Subject<Layout>();
  layout$ = this.layout.asObservable();

  constructor() {}

  setLoading(loading: boolean): void {
    this.loading.next(loading);
  }

  setLayout(value: Layout): void {
    this.layout.next(value);
  }
}
