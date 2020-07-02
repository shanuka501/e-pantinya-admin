import { TutorsLayoutComponent } from './shared/components/layouts/tutors-layout/tutors-layout.component';
import { CoursesLayoutComponent } from './shared/components/layouts/courses-layout/courses-layout.component';
import { LandingV3Component } from './views/landing/landing-v3/landing-v3.component';
import { LandingV2Component } from './views/landing/landing-v2/landing-v2.component';
import {LandingLayoutComponent} from "./shared/components/layouts/landing-layout/landing-layout.component";
import {NgModule, Component} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {AuthLayoutComponent} from "./shared/components/layouts/auth-layout/auth-layout.component";
import { UserLayoutComponent } from './shared/components/layouts/user-layout/user-layout.component';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AdminPage2Component } from './shared/hasreds/user-shareds/admin-page2/admin-page2.component';
import { AdminCoursesComponent } from './shared/hasreds/user-shareds/admin-courses/admin-courses.component';
import { AdminPapersComponent } from './shared/hasreds/user-shareds/admin-papers/admin-papers.component';
import { AdminUpdateUserComponent } from './shared/hasreds/user-shareds/admin-update-user/admin-update-user.component';
import { AdminLoginComponent } from './shared/hasreds/user-shareds/admin-login/admin-login.component';
import { AdminAddGradeComponent } from './shared/hasreds/user-shareds/admin-add-grade/admin-add-grade.component';
import { AdminAddSubjectComponent } from './shared/hasreds/user-shareds/admin-add-subject/admin-add-subject.component';
import { AdminAddPapertypeComponent } from './shared/hasreds/user-shareds/admin-add-papertype/admin-add-papertype.component';
import { AdminAddCategoryComponent } from './shared/hasreds/user-shareds/admin-add-category/admin-add-category.component';
import { AdminmcqComponent } from './shared/hasreds/user-shareds/adminmcq/adminmcq.component';
import { AdminessayComponent } from './shared/hasreds/user-shareds/adminessay/adminessay.component';
import { AdminShortNotesComponent } from './shared/hasreds/user-shareds/admin-short-notes/admin-short-notes.component';
import { AdminTutorialComponent } from './shared/hasreds/user-shareds/admin-tutorial/admin-tutorial.component';


const routes: Routes = [
  { 
    path: '',
    // comment out this 2 line to make any landing demo as your root .
    // redirectTo: "landing/demos",

    // pathMatch: "full",

    /** 
      uncomment this to make root url as one of landing page .
      and open landing-routing.module.ts to select which demo version 
      you want as your root

      like : 
      in landing-routing.module.ts**/
    // {
      // path: "v3",
      // component: LandingV3Component
    // },
    
    

    component: LandingLayoutComponent,
     children: [
       {
         path: '',
         loadChildren: './views/landing/landing.module#LandingModule'
      }
     ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'sessions',
        loadChildren: () =>
          import('./views/sessions/sessions.module').then(
            (m) => m.SessionsModule
          ),
      },
    ],
  },
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      {
        path: 'landing',
        loadChildren: () =>
          import('./views/landing/landing.module').then((m) => m.LandingModule),
      },
    ],
  },
  {
    path: 'user', component: UserLayoutComponent,
  },
  {
    path: 'courses' , component :CoursesLayoutComponent,
  },
  {
    path: 'tutors', component: TutorsLayoutComponent,
  },
  {
    path: 'admin', component: AdminLayoutComponent,
  },
  {
    path: 'adminpage2', component: AdminPage2Component,
  },
  {
    path: 'admincourses', component: AdminCoursesComponent,
  },
  {
  path: 'adminpapers' , component: AdminPapersComponent,
  },
  {
    path: 'adminuserupdate' , component: AdminUpdateUserComponent,
  },
  {
    path: 'adminlogin' , component: AdminLoginComponent,
  },
  {
    path: 'adminaddgrade' , component: AdminAddGradeComponent,
  },
  {
    path: 'adminaddsubject' , component: AdminAddSubjectComponent,
  },
  {
    path: 'adminpapertype' , component: AdminAddPapertypeComponent,
  },
  {
    path: 'admincategory' , component: AdminAddCategoryComponent,
  },
  {
    path: 'adminmcq' , component: AdminmcqComponent,
  },
  {
    path: 'adminessay' , component: AdminessayComponent,
  },
  {
    path: 'adminnotes' , component: AdminShortNotesComponent,
  },
  {
    path: 'admintutorial' , component: AdminTutorialComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
