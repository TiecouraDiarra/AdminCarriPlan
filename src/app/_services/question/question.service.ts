import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from "src/app/_modeles/question/question";


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  API_URL = 'http://localhost:8080/question';

  constructor(private http: HttpClient) { }

  //AFFICHER LA LISTE DES QUESTIONS
  AfficherLaListeQuestions(): Observable<any> {
    return this.http.get(`${this.API_URL}/afficher`);
  }

  //AJOUTER UNE QUESTION
  AjouterQuestion(question1: any, id_typequestion: any, id_typematiere: any): Observable<any> {
    const data = new FormData();
    data.append("question1", question1)
    console.log(id_typequestion)
    console.log(id_typematiere)
    return this.http.post(`${this.API_URL}/ajouter/${id_typequestion}/${id_typematiere}`, data);
  }

  //SUPPRIMER QUESTION
  SupprimerQuestion(id_question: number): Observable<any> {
    return this.http.delete(
      this.API_URL + '/supprimer/' + `${id_question}`
    );
  }

  //Modifier QUESTION
  // modifierQuestion(id: number, question: Question): Observable<Question> {
  //   const url = `${this.API_URL}/modifierquestion/${id}`;
  //   return this.http.put<Question>(url, question);
  // }

}
