import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { TutorsComponent } from './tutors/tutors.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminGraphsComponent } from './admin-graphs/admin-graphs.component';
import { AdminPage2Component } from './admin-page2/admin-page2.component';
import { AdminCoursesComponent } from './admin-courses/admin-courses.component';
import { AdminPapersComponent } from './admin-papers/admin-papers.component';
import { AdminUpdateUserComponent } from './admin-update-user/admin-update-user.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminAddGradeComponent } from './admin-add-grade/admin-add-grade.component';
import { AdminAddSubjectComponent } from './admin-add-subject/admin-add-subject.component';
import { AdminAddPapertypeComponent } from './admin-add-papertype/admin-add-papertype.component';
import { AdminAddCategoryComponent } from './admin-add-category/admin-add-category.component';
import { AdminmcqComponent } from './adminmcq/adminmcq.component';
import { AdminessayComponent } from './adminessay/adminessay.component';
import { AdminShortNotesComponent } from './admin-short-notes/admin-short-notes.component';
import { AdminTutorialComponent } from './admin-tutorial/admin-tutorial.component';




@NgModule({
  declarations: [
    SideNavComponent,
    FooterComponent,
    HeaderComponent,
    CoursesComponent,
    TutorsComponent,
    AdminComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminGraphsComponent,
    AdminPage2Component,
    AdminCoursesComponent,
    AdminPapersComponent,
    AdminUpdateUserComponent,
    AdminLoginComponent,
    AdminAddGradeComponent,
    AdminAddSubjectComponent,
    AdminAddPapertypeComponent,
    AdminAddCategoryComponent,
    AdminmcqComponent,
    AdminessayComponent,
    AdminShortNotesComponent,
    AdminTutorialComponent,
 
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [
    SideNavComponent,
    FooterComponent,
    HeaderComponent,
    CoursesComponent,
    TutorsComponent,
    AdminComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminGraphsComponent,
    AdminPage2Component,
    AdminCoursesComponent,
    AdminPapersComponent,
    AdminUpdateUserComponent,
    AdminLoginComponent,
    AdminAddGradeComponent,
    AdminAddSubjectComponent,
    AdminAddPapertypeComponent,
    AdminAddCategoryComponent,
    AdminmcqComponent,
    AdminessayComponent,
    AdminShortNotesComponent,
    AdminTutorialComponent
    
  ]
})
export class UserSharedsModule { }
