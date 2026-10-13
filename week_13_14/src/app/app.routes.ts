import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { BookingComponent } from './pages/booking/booking.component';
import { BookingsComponent } from './pages/bookings/bookings.component';

// Each path shows a different component
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'book', component: BookingComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: '**', redirectTo: '' }
];
