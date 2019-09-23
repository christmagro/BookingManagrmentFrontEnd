import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {ResponseBookingList} from './models/responsebookinglist';
import {ResponseBooking} from './models/responsebooking';
import {Booking} from './models/booking';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // API path
  base_path = 'http://localhost:8098/booking/';

  constructor(private http: HttpClient) {
  }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  // Get booking data
  getList(): Observable<ResponseBookingList> {
    return this.http
      .get<ResponseBookingList>(this.base_path + 'list')
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getBooking(id): Observable<ResponseBooking> {
    return this.http
      .get<ResponseBooking>(this.base_path + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Create a new item
  createBooking(booking): Observable<Booking> {
    return this.http
      .post<Booking>(this.base_path, JSON.stringify(booking), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
}
