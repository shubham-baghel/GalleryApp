import { ImageService } from './shared/image.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'image-detail',
    templateUrl: './image-detail.component.html',
    styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
    image: any;
    constructor (private imageService : ImageService, private route: ActivatedRoute){}

    ngOnInit(){
        this.image =  this.imageService.getImage(
            +this.route.snapshot.params['id']
        )
    }
}