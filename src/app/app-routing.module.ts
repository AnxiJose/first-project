import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { StudentsComponent } from './core/students/students.component';
import { RoleGuard } from './core/role.guard';
import { StudentComponent } from './shared/student-profile/student.component';
import { PiarComponent } from './core/piar/piar.component';

import { EnvironmentFormComponent } from './core/environment-form/environment-form.component';
import { StudentCreateUpdateComponent } from './core/student-cu/student-cu.component';


export const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
  },

    {
    path: 'home',
    component: StudentsComponent,
    data: { roles: ['user', 'admin'] }}
    ,

  {
    path:'student/create',
    component:StudentCreateUpdateComponent
  },
  {
    path: 'students',

    //canActivate:mapToCanActivate([RoleGuard]),
    component: StudentsComponent,
    data: { roles: ['user', 'admin']},},
    {path: 'student',


    children: [


      {
      path: ':id/piar',
      //canActivate:mapToCanActivate([RoleGuard]),
      component: PiarComponent,
      data: { roles: ['user', 'admin']},},
      {
        path: ':id/entorno',
      //canActivate:mapToCanActivate([RoleGuard]),
      component: EnvironmentFormComponent,
      data: { roles: ['user', 'admin']}
      }

    ],
  }


]


@NgModule({
  declarations: [],
  imports: [

    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
