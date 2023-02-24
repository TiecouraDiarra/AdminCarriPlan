import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-input-groups',
  templateUrl: './input-groups.component.html',
  styleUrls: ['./input-groups.component.scss']
})
export class InputGroupsComponent implements OnInit {

  etudiant: any
  nombreetudiant: number = 0
  p: number = 1;
  searchText: any;

  constructor(private serviceUser: UserService) { }

  ngOnInit(): void {
    //AFFICHER LA LISTE DES ETUDIANT
    this.serviceUser.AfficherLaListeEtudants().subscribe(data => {
      this.etudiant = data;
      this.nombreetudiant = data.length
      console.log(this.etudiant);
    })
  }

  //SUPPRIMER UTILISATEUR
  SupprimerUser(id_user: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger',
      },
      heightAuto: false
    })
    swalWithBootstrapButtons.fire({
      title: 'Cet utilisateur va etre supprimé !!!!',
      text: "Vous pouvez annuler ou confirmer!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confimer!',
      cancelButtonText: 'Annuler!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceUser.SupprimerUser(id_user).subscribe(data => {
          console.log(data);
          swalWithBootstrapButtons.fire(
            'Utilisateur supprimé avec succes!',
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
}
