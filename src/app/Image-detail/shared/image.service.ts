import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class ImageService {
     ImagesToBeShown = [];

    constructor(private _http: Http){}

     getImages = () => {
        //  this.ImagesToBeShown = IMAGES.slice(0);
        //  return this.ImagesToBeShown;

        return this._http.get("/api/images")
            .map(result => this.ImagesToBeShown = result.json().data);
     }

     getImage = ( id : number ) => {
         let myParams = new URLSearchParams();
         myParams.append('id', id.toString());
        
         myParams.set('id',id.toString());

         let options = new RequestOptions({params : myParams});

         var myUrl = `/api/image/${id}`;

        this._http.get(myUrl, options)
            .map(result => this.ImagesToBeShown = result.json().data);
        return this.ImagesToBeShown.slice(0).find(x => x.id == id);
     }

}

const IMAGES = [
    { "id" : "1", "catagory" : "boats", "caption" : "View From a Boat", "url" : "assets/img/boat1.jpg" },
    { "id" : "2", "catagory" : "boats", "caption" : "View From a Boat", "url" : "assets/img/boat2.jpg" },
    { "id" : "3", "catagory" : "boats", "caption" : "View From a Boat", "url" : "assets/img/boat3.jpg" },
    { "id" : "4", "catagory" : "boats", "caption" : "View From a Boat", "url" : "assets/img/boat4.jpg" },
    { "id" : "5", "catagory" : "monument", "caption" : "India Gate", "url" : "assets/img/monument1.jpg" },
    { "id" : "6", "catagory" : "monument", "caption" : "Taj Mahal", "url" : "assets/img/monument2.jpg" },
    { "id" : "7", "catagory" : "monument", "caption" : "Hawa Mahal", "url" : "assets/img/monument3.jpg" },
    { "id" : "8", "catagory" : "monument", "caption" : "Qutub Meenar", "url" : "assets/img/monument4.jpg" },
    { "id" : "9", "catagory" : "nature", "caption" : "Nature", "url" : "assets/img/nature1.jpg" },
    { "id" : "10", "catagory" : "nature", "caption" : "Nature", "url" : "assets/img/nature2.jpg" },
    { "id" : "11", "catagory" : "nature", "caption" : "Nature", "url" : "assets/img/nature3.jpg" },
]