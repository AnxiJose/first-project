import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { StudentsComponent } from './modules/students/students.component';
import { RoleGuard } from './core/role.guard';
import { StudentComponent } from './modules/student/student.component';
import { PiarComponent } from './modules/piar/piar.component';

import { FormBasicInfoComponent } from './modules/form-basic-info/form-basic-info.component';


export const routes: Routes = [
  {



    path: 'home',

    children: [
      {
      path: 'students',
      //canActivate:mapToCanActivate([RoleGuard]),
      component: StudentsComponent,
      data: { roles: ['user', 'admin'] }

    }
    ],
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'student/:id',

    children: [
      {
        path: '',
        //canActivate:mapToCanActivate([RoleGuard]),
        component: StudentComponent,
        data: { roles: ['user', 'admin']},},
      {
      path: 'piar',
      //canActivate:mapToCanActivate([RoleGuard]),
      component: PiarComponent,
      data: { roles: ['user', 'admin']},},
      {
        path: 'general',
      //canActivate:mapToCanActivate([RoleGuard]),
      component: FormBasicInfoComponent,
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
