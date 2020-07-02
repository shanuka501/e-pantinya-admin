import { TutorsLayoutModule } from './shared/components/layouts/tutors-layout/tutors-layout.module';
import { CoursesLayoutModule } from './shared/components/layouts/courses-layout/courses-layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { HttpClientModule } from '@angular/common/http';
import { UserLayoutModule } from './shared/components/layouts/user-layout/user-layout.module';
import { from } from 'rxjs';
import { UserProfileComponent } from './views/students/user-profile/user-profile.component';
import { AdminLayoutModule } from './shared/components/layouts/admin-layout/admin-layout.module';






@NgModule({
  declarations: [AppComponent, UserProfileComponent],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UserLayoutModule,
    AppRoutingModule,
    TutorsLayoutModule,
    AdminLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
