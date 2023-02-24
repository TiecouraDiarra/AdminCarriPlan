import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParcoursService {
  API_URL = 'http://localhost:8080/parcours';

  constructor(private http: HttpClient) { }

  //AFFICHER NOMBRE TOTAL PARCOURS
  AfficherNombreTotalParcours(): Observable<any> {
    return this.http.get(`${this.API_URL}/NombreParcoursTotal`);
  }

  //AFFICHER LA LISTE DES PARCOURS
  AfficherLaListeParcours(): Observable<any> {
    return this.http.get(`${this.API_URL}/afficher`);
  }

  //RECUPERER L'ID D'UN PARCOURS
  RetrouverParIdParcours(idParcours: number): Observable<any> {
    return this.http.get(`${this.API_URL}/RecupererIdParcours/${idParcours}`);
  }

  //AJOUTER UN PARCOURS
  AjouterParcours(nomparcours: any, description: any, titre: any, conseil: any, type: any, admission: any, duree: any, filiere: any, imageparcours: File, id_niveauparcours: any): Observable<any> {
    const data = new FormData();
    data.append("nomparcours", nomparcours)
    data.append("description", description)
    data.append("titre", titre)
    data.append("conseil", conseil)
    data.append("type", type)
    data.append("admission", admission)
    data.append("duree", duree)
    data.append("filiere", filiere)
    data.append("imageparcours", imageparcours)

    console.log(id_niveauparcours)
    return this.http.post(`${this.API_URL}/ajouter/${id_niveauparcours}`, data);
  }

  //SUPPRIMER DOMAINE
  SupprimerParcours(id_parcours: number): Observable<any> {
    return this.http.delete(
      this.API_URL + '/supprimer/' + `${id_parcours}`
    );
  }
}
