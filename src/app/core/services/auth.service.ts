import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ApiService } from '@data/api.service';
import { StorageService } from '@app/services/storage.service';
import { finalize, map, switchMap, tap } from 'rxjs/operators';

export type Credential = {
  phone: string;
  password: string;
};

export interface Auth {
  token: string;
}

export interface User extends Auth {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static TOKEN_KEY = 'access_token';

  private _currentUser = new BehaviorSubject<User | null>(null);
  private _accessToken = new BehaviorSubject<string>('');

  currentUser$ = this._currentUser.asObservable();
  accessToken$ = this._accessToken.asObservable();

  redirectUrl!: string;

  constructor(private storageService: StorageService, private apiService: ApiService) {
    this.redirectUrl = `/home`;
    this._accessToken.next(this.storageService.getValue(AuthService.TOKEN_KEY));
  }

  getCurrentUser(): any | null {
    return this._currentUser.getValue();
  }

  setCurrentUser(value: any): void {
    this._currentUser.next(value);
  }

  removeCurrentUser(): void {
    this.storageService.remove(AuthService.TOKEN_KEY);
    this._currentUser.next(null);
    this._accessToken.next('');
  }

  get isAuthenticated(): Observable<boolean> {
    return this.currentUser$.pipe(
      switchMap(user => {
        if (user) {
          return of(true);
        } else if (!!this.accessToken) {
          return this.fetchAuthenticatedUser().pipe(map(auth => !!auth));
        }
        return of(false);
      })
    );
  }

  get accessToken(): string {
    const storageToken = this.storageService.getValue(AuthService.TOKEN_KEY);
    if (storageToken !== this._accessToken.value) {
      this._accessToken.next(storageToken);
      return storageToken;
    } else {
      return this._accessToken.value;
    }
  }

  login(cred: Credential): Observable<any> {
    return this.apiService.post('/cms/auth/login', cred).pipe(
      // Storage new access token
      tap(resp => {
        // const storageToken = this.storageService.getValue(AuthService.TOKEN_KEY);
        this.setCurrentUser(resp.body?.access_token);
        this.storageService.setValue(AuthService.TOKEN_KEY, resp.body?.access_token);
      }),
      switchMap(_ => this.fetchAuthenticatedUser())
    );
  }

  logout(): Observable<any> {
    return this.apiService.delete('/cms/auth/logout').pipe(
      finalize(() => {
        this.removeCurrentUser();
      })
    );
  }

  fetchAuthenticatedUser(): Observable<any> {
    return this.apiService.get('/cms/auth/me').pipe(
      // Set authenticated user
      tap(resp => {
        this.setCurrentUser(resp.body);
      })
    );
  }
}
