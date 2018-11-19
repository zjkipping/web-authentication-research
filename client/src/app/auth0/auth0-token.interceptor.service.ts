import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError, filter, switchMap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  public cachedRequests = [];

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req);
    // return from(this.setAccessToken(req)).pipe(
    //   switchMap(authReq => next.handle(authReq)),
    //   filter((event: any) => event instanceof HttpResponse),
    //     catchError((err: any, _caught: Observable<any>) => {
    //       if (err instanceof HttpErrorResponse) {
    //         if (err.status === 401) {
    //           this.oktaAuth.loginRedirect();
    //           return throwError(err);
    //         } else {
    //           return throwError(err);
    //         }
    //       } else {
    //         return throwError(err);
    //       }
    //     })
    // );
  }

  async setAccessToken(req: HttpRequest<any>) {
    const token = undefined;
    // sets the clientToken on the request's header
    return req.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
}

