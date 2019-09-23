import {ApiError} from './apierror';
import {PayloadBookings} from './payloadbookings';

export class ResponseBookingList {
  payload: PayloadBookings;
  status: string;
  instant: string;
  error: ApiError;
}
