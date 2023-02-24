import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = 'http://localhost:8080/user';

  constructor(private http: HttpClient) { }

  //AFFICHER NOMBRE TOTAL UTILISATEUR
  AfficherNombreTotalUser(): Observable<any> {
    return this.http.get(`${this.API_URL}/NombreUserTotal`);
  }

  //AFFICHER LA LISTE DES ELEVES
  AfficherLaListeEleve(): Observable<any> {
    return this.http.get(`${this.API_URL}/afficherEleve`);
  }

  //AFFICHER LA LISTE DES ETUDIANTS
  AfficherLaListeEtudants(): Observable<any> {
    return this.http.get(`${this.API_URL}/afficherEtudiant`);
  }

   //AFFICHER LA LISTE DES ROLES
   AfficherLaListeRole(): Observable<any> {
    return this.http.get(`${this.API_URL}/afficherRole`);
  }

  //AFFICHER LA LISTE DES PROFESSIONNEL
  AfficherLaListeProfessionnel(): Observable<any> {
    return this.http.get(`${this.API_URL}/afficherProfessionnel`);
  }

  //AFFICHER LA LISTE DES ADMIN
  AfficherLaListeAdmin(): Observable<any> {
    return this.http.get(`${this.API_URL}/afficherAdmin`);
  }

  //SUPPRIMER UTILISATEUR
  SupprimerUser(id_user: number): Observable<any> {
    return this.http.delete(
      this.API_URL + '/Supprimer/' + `${id_user}`
    );
  }
}
