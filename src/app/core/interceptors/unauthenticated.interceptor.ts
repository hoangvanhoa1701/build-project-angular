import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { EMPTY, Observable, throwError } from 'rxjs';
import { AuthService } from '@app/services/auth.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UnauthenticatedInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {
        if (error.status === 401) {
          this.authService.removeCurrentUser();
          // this.authService.logout();
          this.router.navigate(['/login']);
        }
        // if (error.status === 404) {
        //   this.router.navigate(['/404']);
        //   return throwError(error);
        // }
        throw error;
        // throw EMPTY;
      })
    );
  }
}
