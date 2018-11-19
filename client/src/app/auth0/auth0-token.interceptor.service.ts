import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, filter } from 'rxjs/operators';
import { Auth0Service } from './auth0.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private auth0: Auth0Service) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = setAccessToken(req, this.auth0.getAccessToken());
    return next.handle(authReq).pipe(
      filter((event: HttpEvent<any>) => event instanceof HttpResponse),
      catchError((err: any, _caught: Observable<HttpEvent<any>>) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401 || err.status === 403) {
            // this.auth0.login();
            return throwError(err);
          } else {
            return throwError(err);
          }
        } else {
          return throwError(err);
        }
      })
    );
  }
}

function setAccessToken(req: HttpRequest<any>, token: string) {
  return req.clone({
    setHeaders: {
      'Authorization': `Bearer ${token}`
    }
  });
}
