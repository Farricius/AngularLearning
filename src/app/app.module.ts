import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmiiboComponent } from './amiibo/amiibo.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterSearchPipe } from './filter-search.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
//import { PruebasService } from './pruebas.service';


@NgModule({
  declarations: [
    AppComponent,
    AmiiboComponent,
    FormComponent,
    HomeComponent,
    FilterSearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
