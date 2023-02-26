import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NiveauparcoursService } from 'src/app/_services/niveauparcours/niveauparcours.service';
import { ParcoursService } from 'src/app/_services/parcours/parcours.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public AjoutParcoursVisible = false;
  image: string = environment.imageUrl
  
  toggleAjoutParcours() {
    this.AjoutParcoursVisible = !this.AjoutParcoursVisible;
  }
  handleAjoutParcoursChange(event: boolean) {
    this.AjoutParcoursVisible = event;
  }

  ParcooursForm: any = {
    nomparcours: null,
    description: null,
    titre: null,
    conseil: null,
    type: null,
    admission: null,
    duree: null,
    filiere: null
  }

  imageparcours: any
  niveau: any
  niveauparcours: any

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  parcours: any
  ajoutParcours: any
  p: number = 1;
  searchText: any;
  message: string | undefined;
  nombreparcours: number = 0
  colors = [
    { color: 'primary', textColor: 'primary' },
    { color: 'secondary', textColor: 'secondary' },
    { color: 'success', textColor: 'success' },
    { color: 'danger', textColor: 'danger' },
    { color: 'warning', textColor: 'warning' },
    { color: 'info', textColor: 'info' },
    { color: 'light' },
    { color: 'dark' }
  ];

  imgContext = { $implicit: 'top', bottom: 'bottom' };

  constructor(
    private serviceParcours: ParcoursService,
    private route: Router,
    private serviceNiveauParcours: NiveauparcoursService,
  ) { }


  ngOnInit(): void {
    //AFFICHER LA LISTE DES PARCOURS
    this.serviceParcours.AfficherLaListeParcours().subscribe(data => {
      this.parcours = data;
      this.nombreparcours = data.length
      console.log(this.parcours);
    })

    //AFFICHER LA LISTE DES NIVEAUX PARCOURS
    this.serviceNiveauParcours.AfficherLaListeNiveauxParcours().subscribe(data => {
      this.niveauparcours = data;
      console.log(this.niveauparcours);
    })
  }

  //LA METHODE PERMETTANT DE NAVIGUER VERS LA PAGE DETAILS PARCOURS
  goToDettailParcours(id: number) {
    console.log(id);
    return this.route.navigate(['base/collapse', id])
  }

  //LA METHODE PERMETTANT D'AJOUTER UN PARCOURS
  AjouterParcours() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger',
      },
      heightAuto: false
    })
    if (this.ParcooursForm.nomparcours == ""
      || this.ParcooursForm.description == ""
      || this.ParcooursForm.titre == ""
      || this.ParcooursForm.conseil == ""
      || this.ParcooursForm.type == ""
      || this.ParcooursForm.admission == ""
      || this.ParcooursForm.duree == ""
      || this.ParcooursForm.filiere == ""
      || this.imageparcours == null) {
      swalWithBootstrapButtons.fire(
        this.message = " Tous les champs sont obligatoires !",
      )
    } else {
      swalWithBootstrapButtons.fire({
        title: 'Ce parcours va etre ajouté !!!!',
        text: "Vous pouvez annuler ou confirmer!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confimer!',
        cancelButtonText: 'Annuler!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.serviceParcours.AjouterParcours(this.ParcooursForm.nomparcours,
            this.ParcooursForm.description, this.ParcooursForm.titre, this.ParcooursForm.conseil,
            this.ParcooursForm.type, this.ParcooursForm.admission, this.ParcooursForm.duree,
            this.ParcooursForm.filiere, this.imageparcours, this.niveau).subscribe(data => {
              this.ajoutParcours = data;
              console.log(data)
              this.route.navigateByUrl("/base/cards")
              swalWithBootstrapButtons.fire(
                'Parcours ajouté avec succes!',
                'Vous êtes diriger vers la liste des parcours.',
                'success',);
                location.reload();
            })
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Ajout de parcours annulé'
          )

        }
      })

    }
  }

  //CHARGER L'IMAGE
  chargeImg(event: any) {
    this.imageparcours = event.target["files"][0]
    console.log(this.imageparcours);
  }

  //SUPPRIMER PARCOURS
  SupprimerParcours(id_parcours: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger',
      },
      heightAuto: false
    })
    swalWithBootstrapButtons.fire({
      title: 'Ce parcours va etre supprimé !!!!',
      text: "Vous pouvez annuler ou confirmer!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confimer!',
      cancelButtonText: 'Annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceParcours.SupprimerParcours(id_parcours).subscribe(data => {
          console.log(data);
          swalWithBootstrapButtons.fire(
            'Parcours supprimé avec succes!',
            'success',)
            this.route.navigateByUrl("/base/cards")
        });
        location.reload();

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
