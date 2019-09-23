import {Component, OnInit} from '@angular/core';
import {Booking} from '../models/booking';
import {HttpService} from '../http.service';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  booking: Booking;

  constructor(private _http: HttpService,
              private router: Router) {
    this.booking = new Booking();
  }

  error: any = {isError: false, errorMessage: ''};
  isValidDate: any;
  today: number = Date.now();

  ngOnInit() {
  }

  onSubmit() {
    this.isValidDate = this.validateDates(this.booking.pickupDateTime);
    if (this.isValidDate) {
      this._http.createBooking(this.booking).subscribe((response) => {
          this.router.navigate(['']);
        },
        err => {
          console.log(err);
        });
    }
  }

  validateDates(sDate: string) {
    this.isValidDate = true;
    if ((new Date(sDate).valueOf()) < (this.today.valueOf())) {
      this.error = {isError: true, errorMessage: 'Pickup date should be in the future'};
      this.isValidDate = false;
    }
    return this.isValidDate;
  }
}
