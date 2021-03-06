import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { RouterModule }   from '@angular/router';

import {AppComponent} from './app.component';
import {CoursesComponent} from './components/courses/courses.component';
import {StudentComponent} from './components/student/student.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

import { AppRoutingModule }     from './app-routing.module';
@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule,AppRoutingModule ],
  declarations: [AppComponent, CoursesComponent,StudentComponent,DashboardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }