
import { CustomPipe } from './custom.pipe';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { courseComponent } from './course.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule, AbstractControl} from '@angular/forms';
import { customDirective } from './custom.directive';
import {HttpClientModule} from '@angular/common/http';
import { AboutserviceComponent } from './aboutservice/aboutservice.component';
import { CoursesService } from './courses.service';
import { ChildComponent } from './child/child.component';

const Router:Routes=[
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'**',component:PagenotfoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    courseComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    PagenotfoundComponent,
    LoginComponent,
    RegisterComponent,
    customDirective,
    CustomPipe,
    AboutserviceComponent,
    ChildComponent
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(Router)
    
    // {path:'home',component:HomeComponent},
    // {path:'about',component:AboutComponent},
    // {path:'contact',component:ContactComponent},
    // {path:'register',component:RegisterComponent},
    // {path:'login',component:LoginComponent},
    // {path:'**',component:PagenotfoundComponent}
    // ])
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }