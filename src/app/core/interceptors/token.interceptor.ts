import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '@app/services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const cloned = request.clone({
      setHeaders: {
        Accept: this.typeAccept(request.url),
        Authorization: `Bearer ${this.authService?.accessToken}`
      }
    });
    return next.handle(cloned);
  }

  typeAccept(url: string): string {
    // check and change type Accept here
    // if (url.includes('download-xml')) {
    //   return 'application/xml';
    // }
    return 'application/json';
  }
}
