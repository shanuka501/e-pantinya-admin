import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutComponent } from './user-layout.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserSharedsModule } from 'src/app/shared/hasreds/user-shareds/user-shareds.module';



@NgModule({
  declarations: [UserLayoutComponent],
  imports: [CommonModule, RouterModule,
     FlexLayoutModule,
     UserSharedsModule,
    ]
})
export class UserLayoutModule {}
