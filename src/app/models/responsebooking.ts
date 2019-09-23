import {ApiError} from './apierror';
import {PayloadBooking} from './payloadbooking';

export class ResponseBooking {
  payload: PayloadBooking;
  status: string;
  instant: string;
  error: ApiError;
}
