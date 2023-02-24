import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetierService {

  API_URL = 'http://localhost:8080/metiers';

  constructor(private http: HttpClient) { }

  //AFFICHER NOMBRE TOTAL PARCOURS
  AfficherNombreTotalMetier(): Observable<any> {
    return this.http.get(`${this.API_URL}/NombreMetierTotal`);
  }

  //AFFICHER LA LISTE DES METIERS
  AfficherLaListeMetiers(): Observable<any> {
    return this.http.get(`${this.API_URL}/afficher`);
  }

  //RECUPERER L'ID D'UN METIER
  RetrouverParIdMetiers(idMetier: number): Observable<any> {
    return this.http.get(`${this.API_URL}/RecupererIdMetier/${idMetier}`);
  }

  //AJOUTER UN METIER
  AjouterMetier(nommetier: any, avantage: any, descriptionmetier: any, imagemetier: File, id_parcours: any): Observable<any> {
    const data = new FormData();
    data.append("nommetier", nommetier)
    data.append("avantage", avantage)
    data.append("descriptionmetier", descriptionmetier)
    data.append("imagemetier", imagemetier)
    console.log(id_parcours)
    return this.http.post(`${this.API_URL}/ajouter/${id_parcours}`, data);
  }

  //SUPPRIMER METIER
  SupprimerMetier(id_metier: number): Observable<any> {
    return this.http.delete(
      this.API_URL + '/supprimer/' + `${id_metier}`
    );
  }
}
