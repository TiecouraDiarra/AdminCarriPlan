import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { UserService } from 'src/app/_services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checks-radios',
  templateUrl: './checks-radios.component.html',
  styleUrls: ['./checks-radios.component.scss']
})
export class ChecksRadiosComponent implements OnInit {

  administrateur: any
  nombreadmin: number = 0
  p: number = 1;
  searchText: any;

  public AjoutAdminVisible = false;
  toggleAjoutAdmin() {
    this.AjoutAdminVisible = !this.AjoutAdminVisible;
  }
  handleAjoutAdminChange(event: boolean) {
    this.AjoutAdminVisible = event;
  }


  // formGroup = this.formBuilder.group({
  //   flexRadioGroup: this.formBuilder.group({
  //     flexRadioDefault: this.formBuilder.control('two')
  //   }),
  //   flexRadioGroupDisabled: this.formBuilder.group({
  //     flexRadioDefault: this.formBuilder.control({ value: 'two', disabled: true })
  //   }),
  //   flexCheckGroup: this.formBuilder.group({
  //     checkOne: [false],
  //     checkTwo: [true]
  //   }),
  //   flexCheckGroupDisabled: this.formBuilder.group({
  //     checkThree: [{ value: false, disabled: true }],
  //     checkFour: [{ value: true, disabled: true }]
  //   }),
  //   btnCheckGroup: this.formBuilder.group({
  //     checkbox1: [true],
  //     checkbox2: [false],
  //     checkbox3: [{value: false, disabled: true}]
  //   }),
  //   btnRadioGroup: this.formBuilder.group({
  //     radio1: this.formBuilder.control({ value: 'Radio2' })
  //   })
  // });


  constructor(
    private formBuilder: UntypedFormBuilder,
    private serviceUser: UserService
  ) { }

  ngOnInit(): void {
    //AFFICHER LA LISTE DES ADMIN
    this.serviceUser.AfficherLaListeAdmin().subscribe(data => {
      this.administrateur = data;
      this.nombreadmin = data.length
      console.log(this.administrateur);
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

  // setCheckBoxValue(controlName: string) {
  //   const btnCheckGroup = this.formGroup.controls['btnCheckGroup'];
  //   const prevValue = btnCheckGroup.get(controlName)?.value;
  //   const groupValue = {...btnCheckGroup.value};
  //   groupValue[controlName] = !prevValue;
  //   btnCheckGroup.patchValue(groupValue);
  // }

  // setRadioValue(value: string): void {
  //   const group = this.formGroup.controls['btnRadioGroup'];
  //   group.setValue({ radio1: value });
  // }

}
