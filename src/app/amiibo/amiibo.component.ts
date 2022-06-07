import { Component, OnInit } from '@angular/core';
import { PruebasService } from '../pruebas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-amiibo',
  templateUrl: './amiibo.component.html',
  styleUrls: ['./amiibo.component.css'],
  providers: [PruebasService]

})
export class AmiiboComponent implements OnInit {



  public amiibo: any = [];
  public filtrarAmiibo = '';
  public tail: any; //código fábrica
  public character: any;


  constructor(private actRoute: ActivatedRoute, private _router: Router, private _peticionesService: PruebasService) {
    this.tail = this.actRoute.snapshot.params['tail'];
  }



  ngOnInit() {
    this._peticionesService.obtener().subscribe(data => {
      //console.log(this.amiibo);
      for (var i = 0; i < data.amiibo.length; i++) {
        this.amiibo.push(data.amiibo[i]);
      }
    });
  }

  borrarFrase(id:number){
    console.log("borrar");
    this.amiibo.splice(id,1)
  }

  onBack(): void {
    this._router.navigate(['/amiibo']);
  }
}


  // borrarFrase2(name: any) {
  //   console.log("borrar");
  //   const index = this.amiibo.findIndex((item: any) => item > name);
  //   this.amiibo.splice(index, 1);
  // }


  // borrarFrase3(id: number) {
  //   this.amiibo.splice(this.amiibo.findIndex((element: { id: number; }) => element.id == id), 1);
  // }

  // borrarFrase4(msg: string) {
  //   const index: number = this.amiibo.indexOf(msg);
  //   if (index !== -1) {
  //     this.amiibo.splice(index, 1);
  //   }
  // }


