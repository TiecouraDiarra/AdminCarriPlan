import { Component, OnInit } from '@angular/core';
import { NiveauparcoursService } from 'src/app/_services/niveauparcours/niveauparcours.service';
import { TypequestionService } from 'src/app/_services/typequestion/typequestion.service';
import { TypematiereService } from 'src/app/_services/typematiere/typematiere.service';
import { SerielyceeService } from 'src/app/_services/serielycee/serielycee.service';
import { DomaineprofeService } from 'src/app/_services/domaineprofe/domaineprofe.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  //========= AJOUTER=====
  public liveDemoVisible1 = false;
  public liveDemoVisible2 = false;
  public liveDemoVisible3 = false;
  public liveDemoVisible4 = false;
  public liveDemoVisible5 = false;

  toggleLiveDemo1() {
    this.liveDemoVisible1 = !this.liveDemoVisible1;
  }

  toggleLiveDemo2() {
    this.liveDemoVisible2 = !this.liveDemoVisible2;
  }
  toggleLiveDemo3() {
    this.liveDemoVisible3 = !this.liveDemoVisible3;
  }
  toggleLiveDemo4() {
    this.liveDemoVisible4 = !this.liveDemoVisible4;
  }
  toggleLiveDemo5() {
    this.liveDemoVisible5 = !this.liveDemoVisible5;
  }

  handleLiveDemoChange1(event: boolean) {
    this.liveDemoVisible1 = event;
  }
  handleLiveDemoChange2(event: boolean) {
    this.liveDemoVisible2 = event;
  }
  handleLiveDemoChange3(event: boolean) {
    this.liveDemoVisible3 = event;
  }
  handleLiveDemoChange4(event: boolean) {
    this.liveDemoVisible4 = event;
  }
  handleLiveDemoChange5(event: boolean) {
    this.liveDemoVisible5 = event;
  }
  //========= AJOUTER=====


  //NIVEAU PARCOURS 
  form: any = {
    nomniveau: null
  };

  //TYPEQUESTION
  formquestion: any = {
    nomtypequestion: null
  };

  //TYPEMATIERE
  formmatiere: any = {
    nomtypematiere: null
  };

  //SERIE
  formserie: any = {
    nomserie: null
  };

  //SERIE
  formdomaine: any = {
    nomdomaine: null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  eleve: any
  nombreniveau: number = 0
  p: number = 1;
  p1: number = 1;
  p2: number = 1;
  p3: number = 1;
  p4: number = 1;
  p5: number = 1;
  niveauparcours: any
  serielycee: any
  typematiere: any
  domaineprof: any
  nombretypematiere: number = 0
  nombredomaineprof: number = 0
  nombreserielycee: number = 0
  typequestion: any
  nombretypequestion: number = 0
  searchText: any;
  searchText1: any;
  searchText2: any;
  searchText3: any;
  searchText4: any;
  searchText5: any;

  constructor(
    private serviceNiveauParcours: NiveauparcoursService,
    private serviceTypeQuestion: TypequestionService,
    private serviceTypematiere: TypematiereService,
    private serviceSerieLycee: SerielyceeService,
    private serviceDomaineProf: DomaineprofeService,
    private route: Router
  ) { }

  ngOnInit(): void {

    //AFFICHER LA LISTE DES NIVEAUX PARCOURS
    this.serviceNiveauParcours.AfficherLaListeNiveauxParcours().subscribe(data => {
      this.niveauparcours = data;
      this.nombreniveau = data.length
      console.log(this.niveauparcours);
    })

    //AFFICHER LA LISTE DES TYPES DE QUESTIONS
    this.serviceTypeQuestion.AfficherLaListeTypeQuestions().subscribe(data => {
      this.typequestion = data;
      this.nombretypequestion = data.length
      console.log(this.typequestion);
    })

    //AFFICHER LA LISTE DES TYPES DE MATIERES
    this.serviceTypematiere.AfficherLaListeTypeMatiere().subscribe(data => {
      this.typematiere = data;
      this.nombretypematiere = data.length
      console.log(this.typematiere);
    })

    //AFFICHER LA LISTE DES SERIES DU LYCEE
    this.serviceSerieLycee.AfficherLaListeSeriesLycee().subscribe(data => {
      this.serielycee = data;
      this.nombreserielycee = data.length
      console.log(this.typematiere);
    })

    //AFFICHER LA LISTE DES DOMIANES PROFESSIONNELS
    this.serviceDomaineProf.AfficherLaListeDomaineProf().subscribe(data => {
      this.domaineprof = data;
      this.nombredomaineprof = data.length
      console.log(this.domaineprof);
    })
  }

  //AJOUTER UN NIVEAU PARCOURS 
  AjouterNiveauParcours(): void {
    const { nomniveau } = this.form;

    this.serviceNiveauParcours.AjouterNiveauParcours(nomniveau).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.popUpNiveauParcours();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  //POPUP PERMETTANT DE CONFIRMER AJOUT NIVEAU PARCOURS
  popUpNiveauParcours() {
    Swal.fire({
      position: 'center',
      text: 'Niveau parcours ajouté avec succès!!',
      icon: 'success',
      heightAuto: false,
      showConfirmButton: true,
      confirmButtonText: "OK",
      confirmButtonColor: '#0857b5',
      showDenyButton: false,
      showCancelButton: false,
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        this.route.navigateByUrl('/forms/layout', { skipLocationChange: true }).then(() => {
          this.route.navigate(["/forms/layout"])
        })
      }
    })

  }

  //AJOUTER UN TYPE DE QUESTION
  AjouterTypeQuestion(): void {
    const { nomtypequestion } = this.formquestion;

    this.serviceTypeQuestion.AjouterTypeQuestion(nomtypequestion).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.popUpTypeQuestion();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  //POPUP PERMETTANT DE CONFIRMER AJOUT TYPE QUESTION
  popUpTypeQuestion() {
    Swal.fire({
      position: 'center',
      text: 'Type Question ajouté avec succès!!',
      icon: 'success',
      heightAuto: false,
      showConfirmButton: true,
      confirmButtonText: "OK",
      confirmButtonColor: '#0857b5',
      showDenyButton: false,
      showCancelButton: false,
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        this.route.navigateByUrl('/forms/layout', { skipLocationChange: true }).then(() => {
          this.route.navigate(["/forms/layout"])
        })
      }
    })

  }

  //AJOUTER UN TYPE DE MATIERE
  AjouterTypeMatiere(): void {
    const { nomtypematiere } = this.formmatiere;

    this.serviceTypematiere.AjouterTypeMatiere(nomtypematiere).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.popUpTypeMatiere();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  //POPUP PERMETTANT DE CONFIRMER AJOUT TYPE MATIERE
  popUpTypeMatiere() {
    Swal.fire({
      position: 'center',
      text: 'Type matière ajouté avec succès!!',
      icon: 'success',
      heightAuto: false,
      showConfirmButton: true,
      confirmButtonText: "OK",
      confirmButtonColor: '#0857b5',
      showDenyButton: false,
      showCancelButton: false,
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        this.route.navigateByUrl('/forms/layout', { skipLocationChange: true }).then(() => {
          this.route.navigate(["/forms/layout"])
        })
      }
    })

  }

  //AJOUTER SERIE LYCEE
  AjouterSerieLycee(): void {
    const { nomserie } = this.formserie;

    this.serviceSerieLycee.AjouterSerieLycee(nomserie).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.popUpSerie();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  //POPUP PERMETTANT DE CONFIRMER AJOUT SERIE
  popUpSerie() {
    Swal.fire({
      position: 'center',
      text: 'Série ajouté avec succès!!',
      icon: 'success',
      heightAuto: false,
      showConfirmButton: true,
      confirmButtonText: "OK",
      confirmButtonColor: '#0857b5',
      showDenyButton: false,
      showCancelButton: false,
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        this.route.navigateByUrl('/forms/layout', { skipLocationChange: true }).then(() => {
          this.route.navigate(["/forms/layout"])
        })
      }
    })

  }

  //AJOUTER DOMAINE
  AjouterDomaine(): void {
    const { nomdomaine } = this.formdomaine;

    this.serviceDomaineProf.AjouterDomaine(nomdomaine).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.popUpDomaine();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  //POPUP PERMETTANT DE CONFIRMER AJOUT DOMAINE
  popUpDomaine() {
    Swal.fire({
      position: 'center',
      text: 'Domaine ajouté avec succès!!',
      icon: 'success',
      heightAuto: false,
      showConfirmButton: true,
      confirmButtonText: "OK",
      confirmButtonColor: '#0857b5',
      showDenyButton: false,
      showCancelButton: false,
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        this.route.navigateByUrl('/forms/layout', { skipLocationChange: true }).then(() => {
          this.route.navigate(["/forms/layout"])
        })
      }
    })

  }

  //SUPPRIMER NIVEAU PARCOURS
  SupprimerNiveauParcours(id_niveauparcours: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger',
      },
      heightAuto: false
    })
    swalWithBootstrapButtons.fire({
      title: 'Ce niveau va etre supprimé !!!!',
      text: "Vous pouvez annuler ou confirmer!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confimer!',
      cancelButtonText: 'Annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceNiveauParcours.SupprimerNiveauParcours(id_niveauparcours).subscribe(data => {
          console.log(data);
          swalWithBootstrapButtons.fire(
            'Niveau supprimé avec succes!',
            'success',)
          this.route.navigateByUrl("/forms/layout")

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

  //SUPPRIMER TYPE DE QUESTION
  SupprimerTypeQuestion(id_typequestion: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger',
      },
      heightAuto: false
    })
    swalWithBootstrapButtons.fire({
      title: 'Ce type de question va etre supprimé !!!!',
      text: "Vous pouvez annuler ou confirmer!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confimer!',
      cancelButtonText: 'Annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceTypeQuestion.SupprimerTypeQuestion(id_typequestion).subscribe(data => {
          console.log(data);
          this.route.navigateByUrl("/forms/layout")
          swalWithBootstrapButtons.fire(
            'Type question supprimé avec succes!',
            'success',)
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

  //SUPPRIMER TYPE DE MATIERE
  SupprimerTypeMatiere(id_typematiere: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger',
      },
      heightAuto: false
    })
    swalWithBootstrapButtons.fire({
      title: 'Ce type de matière va etre supprimé !!!!',
      text: "Vous pouvez annuler ou confirmer!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confimer!',
      cancelButtonText: 'Annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceTypematiere.SupprimerTypeMatiere(id_typematiere).subscribe(data => {
          console.log(data);
          this.route.navigateByUrl("/forms/layout")
          swalWithBootstrapButtons.fire(
            'Type de matière supprimé avec succes!',
            'success',)
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

  //SUPPRIMER SERIE
  SupprimerSerie(id_serie: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger',
      },
      heightAuto: false
    })
    swalWithBootstrapButtons.fire({
      title: 'Cette série va etre supprimée !!!!',
      text: "Vous pouvez annuler ou confirmer!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confimer!',
      cancelButtonText: 'Annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceSerieLycee.SupprimerSerie(id_serie).subscribe(data => {
          console.log(data);
          this.route.navigateByUrl("/forms/layout")
          swalWithBootstrapButtons.fire(
            'Série supprimée avec succes!',
            'success',)
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

  //SUPPRIMER DOMAINE
  SupprimerDomaine(id_domaine: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger',
      },
      heightAuto: false
    })
    swalWithBootstrapButtons.fire({
      title: 'Ce domaine va etre supprimé !!!!',
      text: "Vous pouvez annuler ou confirmer!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confimer!',
      cancelButtonText: 'Annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceDomaineProf.SupprimerDomaine(id_domaine).subscribe(data => {
          console.log(data);
          this.route.navigateByUrl("/forms/layout")
          swalWithBootstrapButtons.fire(
            'Domaine supprimé avec succes!',
            'success',)
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
}
