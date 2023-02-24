import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoevaluationService {
  API_URL = 'http://localhost:8080/autoevaluation';

  constructor(private http: HttpClient) { }

  //AFFICHER LA LISTE DES AUTOEVALUATIONS
  AfficherLaListeAutoevaluation(): Observable<any> {
    return this.http.get(`${this.API_URL}/afficher`);
  }

   //AFFICHER LA LISTE DES 4 AUTOEVALUATIONS RECENTES
   AfficherLaListeQuatreAutoevaluationRecente(): Observable<any> {
    return this.http.get(`${this.API_URL}/AutorecenteQuatreUser`);
  }

  //SUPPRIMER AUTOEVALUATION
  SupprimerAuto(id_auto: number): Observable<any> {
    return this.http.delete(
      this.API_URL + '/supprimer/' + `${id_auto}`
    );
  }

  //RECUPERER L'ID D'UN PARCOURS
  RetrouverParIdAuto(idauto: number): Observable<any> {
    return this.http.get(`${this.API_URL}/RecupererAutoParId/${idauto}`);
  }
}
