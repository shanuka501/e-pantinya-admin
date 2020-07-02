import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorsLayoutComponent } from './tutors-layout.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserSharedsModule } from 'src/app/shared/hasreds/user-shareds/user-shareds.module';



@NgModule({
  declarations: [TutorsLayoutComponent],
  imports: [
    CommonModule,
    UserSharedsModule,
    FlexLayoutModule,
    RouterModule
  ]
})
export class TutorsLayoutModule { }
