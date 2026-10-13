import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Photo } from '../photo';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-photo-card',
  imports: [NgIf, NgClass, NgStyle, HighlightDirective],
  templateUrl: './photo-card.component.html'
})
export class PhotoCardComponent {
  // Data coming IN from the parent
  @Input() photo!: Photo;
  @Input() showPrice = true;

  // Event going OUT to the parent
  @Output() liked = new EventEmitter<string>();

  likePhoto(): void {
    this.liked.emit(this.photo.title);
  }
}
