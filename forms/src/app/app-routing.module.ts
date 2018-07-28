import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactUsComponent} from './contacts/contact-us/contact-us.component';

const routes: Routes = [

 { path:'',pathMatch:'full',redirectTo:'contact-us'} ,
 { path:'contact-us',component:ContactUsComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
