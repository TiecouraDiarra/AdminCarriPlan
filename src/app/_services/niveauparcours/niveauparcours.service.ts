import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class NiveauparcoursService {
  API_URL = 'http://localhost:8080/niveauparcours';

  constructor(private http: HttpClient) { }

  //AFFICHER LA LISTE DES NIVEAUX PARCOURS
  AfficherLaListeNiveauxParcours(): Observable<any> {
    return this.http.get(`${this.API_URL}/afficher`);
  }

  //AJOUTER UN NIVEAU PARCOURS
  AjouterNiveauParcours(nomniveau: string): Observable<any> {
    return this.http.post(
      this.API_URL + '/ajouter',
      {
        nomniveau,
      },
      httpOptions
    );
  }

  //SUPPRIMER UN NIVEAU PARCOURS
  SupprimerNiveauParcours(id_niveauparcours: number): Observable<any> {
    return this.http.delete(
      this.API_URL + '/supprimer/' + `${id_niveauparcours}`,
      httpOptions
    );
  }
}
