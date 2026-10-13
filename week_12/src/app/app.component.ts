import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Photo } from './photo';
import { PhotoCardComponent } from './photo-card/photo-card.component';

@Component({
  selector: 'app-root',
  imports: [NgFor, NgIf, FormsModule, PhotoCardComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Photo Gallery - Angular';
  photographer = 'Ayesha Khan';
  searchText = '';
  showPrices = true;
  likes = 0;
  lastLiked = '';

  photos: Photo[] = [
    { title: 'Mountain', category: 'Nature', price: 5000,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600' },
    { title: 'Wildlife', category: 'Wildlife', price: 3500,
      image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600' },
    { title: 'Portrait', category: 'Portrait', price: 2500,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600' },
    { title: 'Travel', category: 'Travel', price: 4000,
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600' }
  ];

  // Returns only the photos whose category matches the search box
  filteredPhotos(): Photo[] {
    return this.photos.filter(photo =>
      photo.category.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  togglePrices(): void {
    this.showPrices = !this.showPrices;
  }

  // Runs when a child PhotoCardComponent sends the "liked" event
  onLiked(photoTitle: string): void {
    this.likes++;
    this.lastLiked = photoTitle;
  }
}
