import { Inject, Injectable } from '@angular/core';
import { DATA_MODULE_CONFIG, DataModuleConfig } from '@data/data.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl: string;
  private readonly prefix!: string;
  constructor(
    @Inject(DATA_MODULE_CONFIG) config: DataModuleConfig,
    private httpClient: HttpClient
  ) {
    this.apiUrl = config.url;
    this.prefix = config.prefix || `/api/v1`;
  }

  /**
   * Make a GET request
   */
  get(path: string, options = {}): Observable<any> {
    const url = `${this.apiUrl}${this.prefix}${path}`;
    return this.httpClient.get(url, this.mergeWithDefaultOptions(options));
  }

  /**
   * Make a POST request
   */
  post(path: string, body: any | null, options = {}): Observable<any> {
    const url = `${this.apiUrl}${this.prefix}${path}`;
    return this.httpClient.post(url, body, this.mergeWithDefaultOptions(options));
  }

  /**
   * Make a PUT request
   */
  put(path: string, body: any | null, options = {}): Observable<any> {
    const url = `${this.apiUrl}${this.prefix}${path}`;
    return this.httpClient.put(url, body, this.mergeWithDefaultOptions(options));
  }

  /**
   * Make a DELETE request
   */
  delete(path: string, options = {}): Observable<any> {
    const url = `${this.apiUrl}${this.prefix}${path}`;
    return this.httpClient.delete(url, this.mergeWithDefaultOptions(options));
  }

  /**
   * Default options
   */
  protected mergeWithDefaultOptions(options = {}): any {
    options = { responseType: 'json', observe: 'response', ...options };
    return options;
  }
}
