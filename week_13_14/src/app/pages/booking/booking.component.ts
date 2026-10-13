import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../../models';
import { PhotoService } from '../../services/photo.service';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './booking.component.html'
})
export class BookingComponent {
  categories: string[];

  // The form fields are bound to this object with ngModel
  booking: Booking = {
    name: '',
    email: '',
    category: '',
    date: '',
    message: ''
  };

  constructor(
    private photoService: PhotoService,
    private bookingService: BookingService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.categories = this.photoService.getCategories();

    // If we came from the Gallery, pre-select that category
    const category = this.route.snapshot.queryParamMap.get('category');
    if (category) {
      this.booking.category = category;
    }
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    this.bookingService.addBooking({ ...this.booking });
    this.router.navigate(['/bookings']);
  }
}
