import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MetierService } from 'src/app/_services/metier/metier.service';
import { ParcoursService } from 'src/app/_services/parcours/parcours.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  nombremetier: number = 0
  image: string = environment.imageUrl
  metier: any
  p: number = 1;
  searchText: any;
  parcours: any

  public AjoutMetierVisible = false;
  toggleAjoutMetier() {
    this.AjoutMetierVisible = !this.AjoutMetierVisible;
  }
  handleAjoutMetierChange(event: boolean) {
    this.AjoutMetierVisible = event;
  }

  MetierForm: any = {
    nommetier: null,
    avantage: null,
    descriptionmetier: null,
  }

  imagemetier: any
  parcourss: any
  message: string | undefined;

  states = ['normal', 'active', 'disabled'];
  colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

  constructor(
    private serviceMetier: MetierService,
    private route: Router,
    private serviceParcours: ParcoursService,
  ) { }

  ngOnInit(): void {
    //AFFICHER LA LISTE DES METIERS
    this.serviceMetier.AfficherLaListeMetiers().subscribe(data => {
      this.metier = data;
      this.nombremetier = data.length
      console.log(this.metier);
    })

    //AFFICHER LA LISTE DES PARCOURS
    this.serviceParcours.AfficherLaListeParcours().subscribe(data => {
      this.parcours = data;
      console.log(this.parcours);
    })
  }

  //METHODE PERMETTANT DE NAVIGUER VERS LA PAGE DETAIL METIER
  goToDettailMetiers(id: number) {
    console.log(id);
    return this.route.navigate(['buttons/button-groups', id])
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
    if (this.MetierForm.nommetier == ""
      || this.MetierForm.avantage == ""
      || this.MetierForm.descriptionmetier == ""
      || this.imagemetier == null) {
      swalWithBootstrapButtons.fire(
        this.message = " Tous les champs sont obligatoires !",
      )
    } else {
      swalWithBootstrapButtons.fire({
        title: 'Ce métier va etre ajouté !!!!',
        text: "Vous pouvez annuler ou confirmer!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confimer!',
        cancelButtonText: 'Annuler!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.serviceMetier.AjouterMetier(this.MetierForm.nommetier,
            this.MetierForm.avantage, this.MetierForm.descriptionmetier, this.imagemetier, this.parcourss).subscribe(data => {
              console.log(data)
              this.route.navigateByUrl("/buttons/buttons")
              swalWithBootstrapButtons.fire(
                'Métier ajouté avec succes!',
                'Vous êtes diriger vers la liste des métiers.',
                'success',);
                location.reload();
            })
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Ajout de métier annulé'
          )

        }
      })

    }
  }

  //CHARGER L'IMAGE
  chargeImg(event: any) {
    this.imagemetier = event.target["files"][0]
    console.log(this.imagemetier);
  }

  //SUPPRIMER METIER
  SupprimerMetier(id_metier: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger',
      },
      heightAuto: false
    })
    swalWithBootstrapButtons.fire({
      title: 'Ce métier va etre supprimé !!!!',
      text: "Vous pouvez annuler ou confirmer!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confimer!',
      cancelButtonText: 'Annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceMetier.SupprimerMetier(id_metier).subscribe(data => {
          console.log(data);
          swalWithBootstrapButtons.fire(
            'Métier supprimé avec succes!',
            'success',)
          this.route.navigateByUrl("/base/cards")
          location.reload();
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
