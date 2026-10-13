import { Injectable } from '@angular/core';
import { Booking } from '../models';

// Stores the bookings so the Booking page and My Bookings page share them
@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookings: Booking[] = [];

  addBooking(booking: Booking): void {
    this.bookings.push(booking);
  }

  getBookings(): Booking[] {
    return this.bookings;
  }
}
