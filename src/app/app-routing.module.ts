import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {BookingGetComponent} from './booking-get/booking-get.component';
import {BookingFormComponent} from './booking-form/booking-form.component';

const routes: Routes = [
  { path: '', component: ListComponent},
  { path: 'booking/:id', component: BookingGetComponent},
  { path: 'form', component: BookingFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
