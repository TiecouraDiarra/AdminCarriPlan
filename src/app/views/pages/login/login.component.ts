import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/Auth/auth.service';
import { StorageService } from 'src/app/_services/storage/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {
    numeroOrEmail: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private route: Router, private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { numeroOrEmail, password } = this.form;

    this.authService.login(numeroOrEmail, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        
        this.roles = this.storageService.getUser().roles;
        if (this.roles[0] == "ROLE_SUPERADMIN") {
          this.isLoggedIn = true;
          this.route.navigate(['/dashboard'])
        } else {
          // Afficher un message d'erreur pour les utilisateurs qui n'ont pas les droits
          const errorMsg = "Vous n'avez pas les droits nécessaires pour accéder à cette page";
          Swal.fire({
            position: 'center',
            text: errorMsg,
            icon: 'error',
            heightAuto: false,
            showConfirmButton: true,
            confirmButtonColor: '#0857b5',
            showDenyButton: false,
            showCancelButton: false,
            allowOutsideClick: false,
          });
        }
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }
}
