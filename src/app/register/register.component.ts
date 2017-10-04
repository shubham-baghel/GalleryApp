import { Headers } from '@angular/http';
import { ImageService } from './../Image-detail/shared/image.service';
import { UserService } from './../service/user.service';
import { User } from './../model/model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Subscription } from "rxjs";
import 'rxjs/add/operator/map';


@Component({
    selector : "register",
    templateUrl : "./register.component.html",
    styleUrls : ['./register.component.css']
})

export class RegisterComponent implements OnInit{

    constructor(private userService: UserService, private imageService :ImageService, private _router: Router ){}
    
    public model : User
    public subscription : Subscription  

    ngOnInit(){
        this.model = new User("","","","","");
    }
    
    res : any ;

    submitted = false;




    onSubmit(){

        this.userService.registerUser(this.model)
                    .subscribe(
                        response => this.res = response,
                        error => console.log(error),
                        () => { console.log("finally block");}
                    );
            
        console.log("res:-");
        console.log(this.res);
        if(this.res.status == 200)
        {
        this.submitted = true;
        this.model = new User("","","","","");
        this._router.navigate(['./login']);
        
        }
        
    }
}