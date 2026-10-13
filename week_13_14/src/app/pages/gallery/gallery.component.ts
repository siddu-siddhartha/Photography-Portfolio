import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Photo } from '../../models';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-gallery',
  imports: [NgFor, RouterLink],
  templateUrl: './gallery.component.html'
})
export class GalleryComponent {
  photos: Photo[];

  // Angular gives us the PhotoService (dependency injection)
  constructor(private photoService: PhotoService) {
    this.photos = this.photoService.getPhotos();
  }
}
