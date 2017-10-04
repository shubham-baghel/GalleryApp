import { ImageFilterPipe } from './../Image-detail/shared/filter.pipe';
import { ImageService } from './../Image-detail/shared/image.service';
import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
    title = 'Recent Photos';
    @Input() filterBy? : string = 'all'
    visibleImages : any[] = [];

    constructor (private imageService : ImageService) {
        this.imageService.getImages()
            .subscribe(res => this.visibleImages = res);
    }

    ngOnChanges() {
         this.imageService.getImages()
            .subscribe(res => this.visibleImages = res);
    }
}
