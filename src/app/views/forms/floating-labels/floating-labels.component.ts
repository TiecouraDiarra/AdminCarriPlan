import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-floating-labels',
  templateUrl: './floating-labels.component.html',
  styleUrls: ['./floating-labels.component.scss']
})
export class FloatingLabelsComponent implements OnInit{

  professionnel: any
  nombreprofessionnel: number = 0
  p:number=1;
  searchText:any;
  constructor(private serviceUser : UserService) { }

  ngOnInit(): void {
    //AFFICHER LA LISTE DES PROFESSIONNELS
    this.serviceUser.AfficherLaListeProfessionnel().subscribe(data=>{
      this.professionnel = data;
      this.nombreprofessionnel = data.length
      console.log(this.professionnel);
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
