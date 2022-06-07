import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AmiiboComponent } from './amiibo/amiibo.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'amiibo',component: AmiiboComponent},
  {path: 'amiibo/:tail',component: AmiiboComponent},

  {path: 'form',component: FormComponent},

  {path: '', component: HomeComponent},
  {path: '**',component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
