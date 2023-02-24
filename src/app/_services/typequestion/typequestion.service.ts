import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TypequestionService {
  API_URL = 'http://localhost:8080/typequestion';

  constructor(private http: HttpClient) { }

  //AFFICHER LA LISTE DES TYPES DE QUESTIONS
  AfficherLaListeTypeQuestions(): Observable<any> {
    return this.http.get(`${this.API_URL}/afficher`);
  }

  //AJOUTER UN TYPE DE QUESTION
  AjouterTypeQuestion(nomtypequestion: string): Observable<any> {
    return this.http.post(
      this.API_URL + '/ajouter',
      {
        nomtypequestion,
      },
      httpOptions
    );
  }

  //SUPPRIMER UN TYPE DE QUESTION
  SupprimerTypeQuestion(id_typequestion: number): Observable<any> {
    return this.http.delete(
      this.API_URL + '/supprimer/' + `${id_typequestion}`,
      httpOptions
    );
  }
}
