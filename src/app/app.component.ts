import { Component } from '@angular/core';
import { AmiiboComponent } from './amiibo/amiibo.component';
import { PruebasService } from './pruebas.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:any;
  title = 'proyectoApi';
  constructor (private postData:PruebasService) {}
  
  ngOnInit() {
    this.postData.obtener().subscribe((result)=>{
      console.warn("result", result)
      this.data=result
    })
  }
}
