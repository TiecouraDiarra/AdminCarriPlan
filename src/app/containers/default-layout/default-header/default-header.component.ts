import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { AuthService } from 'src/app/_services/Auth/auth.service';
import { StorageService } from 'src/app/_services/storage/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";
  User: any

  phrase: string = "";
  initials: string;

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(
    private classToggler: ClassToggleService, 
    private storageService: StorageService, 
    private authService: AuthService,
    private route: Router) {
    super();
    this.phrase = this.storageService.getUser().nomcomplet;
    this.initials = this.getInitials(this.phrase);
  }

   //METHODE PERMETTANT DE RECUPERER LES INITIALS DE L'UTILISATEUR CONNECTE
   getInitials(phrase: string): string {
    let words = phrase.split(" ");
    let initials = "";
    words.forEach(word => {
      initials += word[0];
    });
    return initials;
  }

    //METHODE PERMETTANT DE SE DECONNECTER
    logout(): void {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-danger',
        },
        heightAuto: false
      })
      swalWithBootstrapButtons.fire({
        // title: 'Etes-vous sûre de vous déconnecter?',
        text: "Etes-vous sûre de vous déconnecter?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confimer',
        cancelButtonText: 'Annuler',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.authService.logout().subscribe({
            next: res => {
              console.log(res);
              this.storageService.clean();
              //  window.location.reload();
              this.route.navigateByUrl("/login")
            },
            error: err => {
              console.log(err);
            }
          });
        }
      })
      
    }
}
