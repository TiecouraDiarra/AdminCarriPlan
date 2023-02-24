import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/_services/question/question.service';
import { TypematiereService } from 'src/app/_services/typematiere/typematiere.service';
import { TypequestionService } from 'src/app/_services/typequestion/typequestion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  question: any
  nombrequestion: number = 0
  p: number = 1;
  searchText: any;
  typematiere: any
  typematiere1: any
  typequestion: any
  typequestion1: any
  message: string | undefined;

  QuestionForm: any = {
    question1: null
  }

  public AjoutAdminVisible = false;
  toggleAjoutAdmin() {
    this.AjoutAdminVisible = !this.AjoutAdminVisible;
  }
  handleAjoutAdminChange(event: boolean) {
    this.AjoutAdminVisible = event;
  }
  constructor(
    private serviceQuestion: QuestionService,
    private route: Router,
    private serviceTypeQuestion: TypequestionService,
    private serviceTypematiere: TypematiereService,
  ) { }
  ngOnInit(): void {

    //AFFICHER LA LISTE DES QUESTIONS
    this.serviceQuestion.AfficherLaListeQuestions().subscribe(data => {
      this.question = data;
      this.nombrequestion = data.length
      console.log(this.question);
    })

    //AFFICHER LA LISTE DES TYPES DE QUESTIONS
    this.serviceTypeQuestion.AfficherLaListeTypeQuestions().subscribe(data => {
      this.typequestion = data;
      console.log(this.typequestion);
    })

    //AFFICHER LA LISTE DES TYPES DE MATIERES
    this.serviceTypematiere.AfficherLaListeTypeMatiere().subscribe(data => {
      this.typematiere = data;
      console.log(this.typematiere);
    })
  }

  //LA METHODE PERMETTANT D'AJOUTER UN METIER
  AjouterMetiers() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger',
      },
      heightAuto: false
    })
    if (this.QuestionForm.question1 == null) {
      swalWithBootstrapButtons.fire(
        this.message = " Tous les champs sont obligatoires !",
      )
    } else {
      swalWithBootstrapButtons.fire({
        title: 'Cette question va etre ajouté !!!!',
        text: "Vous pouvez annuler ou confirmer!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confimer!',
        cancelButtonText: 'Annuler!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.serviceQuestion.AjouterQuestion(this.QuestionForm.question1, this.typequestion1, this.typematiere1).subscribe(data => {
            console.log(data)
            this.route.navigateByUrl("/buttons/buttons")
            swalWithBootstrapButtons.fire(
              'Question ajoutée avec succes!',
              'Vous êtes diriger vers la liste des questions.',
              'success',)
          })
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Ajout de question annulé'
          )

        }
      })

    }
  }

  //SUPPRIMER QUESTION
  SupprimerQuestion(id_question: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger',
      },
      heightAuto: false
    })
    swalWithBootstrapButtons.fire({
      title: 'Cette question va etre supprimée !!!!',
      text: "Vous pouvez annuler ou confirmer!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confimer!',
      cancelButtonText: 'Annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceQuestion.SupprimerQuestion(id_question).subscribe(data => {
          console.log(data);
          swalWithBootstrapButtons.fire(
            'Question supprimée avec succes!',
            'success',)
          // this.route.navigateByUrl("/base/cards")
        })

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Suppression annulée'
        )

      }

    })
  }

  //MODIFIER QUESTION
  // ModifierQuestion(id_question: number) {
  //   const swalWithBootstrapButtons = Swal.mixin({
  //     customClass: {
  //       confirmButton: 'btn btn-primary',
  //       cancelButton: 'btn btn-danger',
  //     },
  //     heightAuto: false
  //   })
  //   swalWithBootstrapButtons.fire({
  //     title: 'Cette question va etre modifiée !!!!',
  //     text: "Vous pouvez annuler ou confirmer!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Confimer!',
  //     cancelButtonText: 'Annuler!',
  //     reverseButtons: true
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.serviceQuestion.SupprimerQuestion(id_question).subscribe(data => {
  //         console.log(data);
  //         swalWithBootstrapButtons.fire(
  //           'Question modifiée avec succes!',
  //           'success',)
  //         // this.route.navigateByUrl("/base/cards")
  //       })

  //     } else if (
  //       /* Read more about handling dismissals below */
  //       result.dismiss === Swal.DismissReason.cancel
  //     ) {
  //       swalWithBootstrapButtons.fire(
  //         'Suppression annulée'
  //       )

  //     }

  //   })
  // }

}
