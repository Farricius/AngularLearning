import { Component, OnInit } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  onClickSubmit(formData:any) {
    console.log('Name : ' + formData.patient_name);
    console.log('Email: ' + formData.patient_email);
 }

  constructor() { }

  ngOnInit(): void {
  }

}
