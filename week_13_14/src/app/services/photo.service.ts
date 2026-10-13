import { Injectable } from '@angular/core';
import { Photo } from '../models';

// A service keeps data in one place so any component can use it
@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private photos: Photo[] = [
    { id: 1, title: 'Mountain', category: 'Nature', price: 5000,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600' },
    { id: 2, title: 'Wildlife', category: 'Wildlife', price: 3500,
      image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600' },
    { id: 3, title: 'Portrait', category: 'Portrait', price: 2500,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600' },
    { id: 4, title: 'Travel', category: 'Travel', price: 4000,
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600' }
  ];

  getPhotos(): Photo[] {
    return this.photos;
  }

  getCategories(): string[] {
    return this.photos.map(photo => photo.category);
  }
}
