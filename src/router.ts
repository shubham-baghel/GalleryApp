import { RegisterComponent } from './app/register/register.component';
import { LoginComponent } from './app/login/login.component';
import { ImageDetailComponent } from './app/Image-detail/image-detail.component';
import { GalleryComponent } from './app/gallery/gallery.component';
import { Routes } from '@angular/router'

export const appRoutes : Routes = [
    { path: "gallery", component: GalleryComponent},
    { path: "login", component : LoginComponent},
    { path: "image/:id", component: ImageDetailComponent},
    { path: "register" ,component: RegisterComponent},
    { path: "", redirectTo: "/gallery", pathMatch: "full" }   
]