import { CoursesLayoutComponent } from './courses-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserSharedsModule } from 'src/app/shared/hasreds/user-shareds/user-shareds.module';



@NgModule({
  declarations: [ CoursesLayoutComponent],
  imports: [
    CommonModule,
    UserSharedsModule,
    FlexLayoutModule,
    RouterModule
  ]
})
export class CoursesLayoutModule { }
