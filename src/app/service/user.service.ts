import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core'
import { User } from './../model/model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';

@Injectable()
export class UserService {
    user : User
    resp : any

    constructor(private _http:Http){ }

    registerUser = (model : User) => {
        console.log("data should appear here"+ model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post('/api/register/',JSON.stringify(model),options)
                    .map(res => this.resp = res.json().data)

        
    }

}

