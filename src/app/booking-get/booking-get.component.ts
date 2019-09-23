import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {Booking} from '../models/booking';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {ResponseBooking} from '../models/responsebooking';

@Component({
  selector: 'app-booking-get',
  templateUrl: './booking-get.component.html',
  styleUrls: ['./booking-get.component.scss']
})
export class BookingGetComponent implements OnInit {

  booking: Booking;
  id: number;
  response: ResponseBooking;

  constructor(private _http: HttpService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getBooking();

  }

  getBooking() {
    this._http.getBooking(this.id).subscribe(response => {
      console.log(response);
      this.response = response;

    });
  }

  goBackToHome() {
    this.router.navigate(['']);
  }
}
