import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Booking } from '../../models';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-bookings',
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './bookings.component.html'
})
export class BookingsComponent {
  bookings: Booking[];

  constructor(private bookingService: BookingService) {
    this.bookings = this.bookingService.getBookings();
  }
}
