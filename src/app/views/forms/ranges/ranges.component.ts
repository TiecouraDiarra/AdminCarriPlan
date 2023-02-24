import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/_services/storage/storage.service';
import { UserService } from 'src/app/_services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ranges',
  templateUrl: './ranges.component.html',
  styleUrls: ['./ranges.component.scss']
})
export class RangesComponent implements OnInit {

  eleve: any
  role: any
  roles: string[] = [];
  nombreuser: number = 0
  p: number = 1;
  searchText: any;
  constructor(private serviceUser: UserService,private storageService: StorageService) { }

  ngOnInit(): void {
    this.roles = this.storageService.getUser().roles;
    //AFFICHER LA LISTE DES UTILISATEURS
    this.serviceUser.AfficherLaListeEtudants().subscribe(data => {
      this.eleve = data;
      this.nombreuser = data.length
      console.log(this.eleve);
    })

     //AFFICHER LA LISTE DES ROLES
     this.serviceUser.AfficherLaListeRole().subscribe(data => {
      this.role = data;
      console.log(this.role);
    })
  }

  onFilterChange(selectedValue: string) {
    this.searchText = selectedValue === '' ? '' : selectedValue.toLowerCase();
  }
  Tout(){
    //AFFICHER LA LISTE DES UTILISATEURS
    this.serviceUser.AfficherLaListeEleve().subscribe(data => {
      this.eleve = data;
      this.nombreuser = data.length
      console.log(this.eleve);
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
