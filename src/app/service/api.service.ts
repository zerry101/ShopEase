import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { createClient } from 'pexels';
import {catchError} from 'rxjs/operators'

const httpOptions={
  headers:new HttpHeaders({
    'Authorization':'Qjc8ocjT7EKYJKZUYKNEprkE1m3JPQdV0ftZ9Nk1xaq6sxRK35WfkeBK'
  })
}

// import {}
// const client = createClient('Qjc8ocjT7EKYJKZUYKNEprkE1m3JPQdV0ftZ9Nk1xaq6sxRK35WfkeBK');
// const query = 'Nature';

// client.photos.search({ query, per_page: 1 }).then(photos => {});
@Injectable({
  providedIn: 'root'
})
export class ApiService  {

  constructor(public http:HttpClient) {}
  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   // throw new Error('Method not implemented.');
  //     req=req.clone({
  //       setHeaders:{
  //         Authorization:'Qjc8ocjT7EKYJKZUYKNEprkE1m3JPQdV0ftZ9Nk1xaq6sxRK35WfkeBK'
  //       }
  //     });

  //     return next.handle(req);
  // }

  // getApiData():Observable<any>{
  //   // return this.http.get('"https://api.pexels.com/v1/search?query=nature&per_page=1"');
  // }
search:String='nature';
perPage:number=1;


getPexelData(search:undefined,perPage:undefined):Observable<any>{
 console.log(search);
 console.log(perPage);

 const url='https://api.pexels.com/v1/search?query='+search+'&per_page='+perPage;

 return this.http.get<any>(url,httpOptions).pipe(catchError(this.handleError));


}

handleError(error:any){
  return throwError(error.message||"server error");
}

}
