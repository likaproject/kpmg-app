import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent  } from './auth/auth.component';



const routes: Routes = [

  { path: 'users', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'challenge', component: AuthComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
