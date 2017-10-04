import { EqualValidator } from './_directive/equal-validator.directive';
import { UserService } from './service/user.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { appRoutes } from './../router';
import { ImageFilterPipe } from './Image-detail/shared/filter.pipe';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule}  from '@angular/router' 
import { ImageService } from './Image-detail/shared/image.service'; 

import { AppComponent } from './app.component';
import { AlertModule } from "ngx-bootstrap/ng2-bootstrap";
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './Image-detail/image-detail.component';
import { HttpModule } from '@angular/http';
import  { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageDetailComponent,
    ImageFilterPipe,
    LoginComponent,
    RegisterComponent,
    EqualValidator
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [ImageService, ImageFilterPipe,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
