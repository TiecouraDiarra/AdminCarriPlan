import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TypematiereService {
  API_URL = 'http://localhost:8080/typematiere';

  constructor(private http: HttpClient) { }

  //AFFICHER LA LISTE DES TYPES DE MATIERES
  AfficherLaListeTypeMatiere():Observable<any>{
    return this.http.get(`${this.API_URL}/afficher`);
  }

   //AJOUTER UN TYPE DE MATIERE
   AjouterTypeMatiere(nomtypematiere: string): Observable<any> {
    return this.http.post(
      this.API_URL + '/ajouter',
      {
        nomtypematiere,
      },
      httpOptions
    );
  }

    //SUPPRIMER UN TYPE DE MATIERE
    SupprimerTypeMatiere(id_typematiere: number): Observable<any> {
      return this.http.delete(
        this.API_URL + '/supprimer/' + `${id_typematiere}`,
        httpOptions
      );
    }
}
