import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class PruebasService {
  // url = "https://digimon-api.vercel.app/api/digimon";
  url = "https://www.amiiboapi.com/api/amiibo";


constructor(private http: HttpClient) { }

obtener(): Observable<any> {
	return this.http.get(this.url);
}

deleteMuneco(tail: number){
  return this.http.delete(this.url+"/amiibo/"+tail);
}

}


// getPosts() {

//   return this.http.get(this.url);
// }
//    }
