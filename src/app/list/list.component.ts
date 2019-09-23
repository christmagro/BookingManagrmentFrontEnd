import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {Bookings} from '../models/bookings';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  bookings: Bookings;
  bookingId: number;

  constructor(private _http: HttpService,
              private router: Router) {
  }

  ngOnInit() {
    this.getAllBookings();
  }

  getAllBookings() {
    this._http.getList().subscribe(response => {
      console.log(response);
      this.bookings = response.payload.bookings;
    });
  }



  getBooking() {
    this.router.navigate(['/booking/' + this.bookingId]);
  }
}
