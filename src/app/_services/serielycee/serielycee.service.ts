import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SerielyceeService {

  API_URL = 'http://localhost:8080/serieetudiant';

  constructor(private http: HttpClient) { }

  //AFFICHER LA LISTE DES SERIES DU LYCEE
  AfficherLaListeSeriesLycee():Observable<any>{
    return this.http.get(`${this.API_URL}/afficher`);
  }

   //AJOUTER DE SERIE
   AjouterSerieLycee(nomserie: string): Observable<any> {
    return this.http.post(
      this.API_URL + '/ajouter',
      {
        nomserie,
      },
      httpOptions
    );
  }

  //SUPPRIMER SERIE
  SupprimerSerie(id_serie: number): Observable<any> {
    return this.http.delete(
      this.API_URL + '/supprimer/' + `${id_serie}`,
      httpOptions
    );
  }
}
