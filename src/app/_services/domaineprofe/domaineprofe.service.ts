import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DomaineprofeService {

  API_URL = 'http://localhost:8080/domaineprof';

  constructor(private http: HttpClient) { }

  //AFFICHER LA LISTE DES DOMAINES PROFESSIONNELS
  AfficherLaListeDomaineProf():Observable<any>{
    return this.http.get(`${this.API_URL}/afficher`);
  }

  //AJOUTER DE DOMAINE 
  AjouterDomaine(nomdomaine: string): Observable<any> {
    return this.http.post(
      this.API_URL + '/ajouter',
      {
        nomdomaine,
      },
      httpOptions
    );
  }

    //SUPPRIMER DOMAINE
    SupprimerDomaine(id_domaine: number): Observable<any> {
      return this.http.delete(
        this.API_URL + '/supprimer/' + `${id_domaine}`,
        httpOptions
      );
    }
}
