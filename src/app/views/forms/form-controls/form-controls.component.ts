import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutoevaluationService } from 'src/app/_services/autoevaluation/autoevaluation.service';
import { UserService } from 'src/app/_services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.scss']
})
export class FormControlsComponent implements OnInit {

  p: number = 1;
  searchText: any;
  role : any
  autoevaluation: any
  nombreautoevaluation: number = 0
  public favoriteColor = '#26ab3c';

  constructor(
    private serviceAutoeva: AutoevaluationService,
    private serviceUser: UserService,
    private route: Router) { }
  ngOnInit(): void {
    //AFFICHER LA LISTE DES AUTOEVALUATIONS
    this.serviceAutoeva.AfficherLaListeAutoevaluation().subscribe(data => {
      this.autoevaluation = data;
      this.nombreautoevaluation = data.length
      console.log(this.autoevaluation);
    })
      //AFFICHER LA LISTE DES ROLES
      this.serviceUser.AfficherLaListeRole().subscribe(data => {
        this.role = data;
        console.log(this.role);
      })
  }

  //SUPPRIMER AUTOEVALUATION
  SupprimerAuto(id_auto: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger',
      },
      heightAuto: false
    })
    swalWithBootstrapButtons.fire({
      title: 'Cette autoevaluation va etre supprimée !!!!',
      text: "Vous pouvez annuler ou confirmer!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confimer!',
      cancelButtonText: 'Annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceAutoeva.SupprimerAuto(id_auto).subscribe(data => {
          console.log(data);
          swalWithBootstrapButtons.fire(
            'Autoévaluation supprimée avec succes!',
            'success',)
          this.route.navigateByUrl("/forms/form-control");
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


  //LA METHODE PERMETTANT DE NAVIGUER VERS LA PAGE DETAIL AUTOEVALUATION
  goToDettailAuto(id: number) {
    console.log(id);
    return this.route.navigate(['forms/validation/', id])
  }
}
