import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MetierService } from 'src/app/_services/metier/metier.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-button-groups',
  templateUrl: './button-groups.component.html',
  styleUrls: ['./button-groups.component.scss']
})
export class ButtonGroupsComponent implements OnInit{
  metier : any
  id:any
  parcours:any
  p1:number=1
  image: string = environment.imageUrl
  searchText:any
  collapses = [false, false, false, false];

  toggleCollapse(id: number): void {
    // @ts-ignore
    this.collapses[id] = !this.collapses[id];
  }

  // formCheck1 = this.formBuilder.group({
  //   checkbox1: false,
  //   checkbox2: false,
  //   checkbox3: false
  // });
  // formRadio1 = new UntypedFormGroup({
  //   radio1: new UntypedFormControl('Radio1')
  // });

  constructor(
    private formBuilder: UntypedFormBuilder,
    private route:ActivatedRoute,
    private serviceMetier : MetierService,
    private router : Router
  ) { }

  // setCheckBoxValue(controlName: string) {
  //   const prevValue = this.formCheck1.get(controlName)?.value;
  //   const value = this.formCheck1.value;
  //   value[controlName] = !prevValue;
  //   this.formCheck1.setValue(value);
  // }

  // setRadioValue(value: string): void {
  //   this.formRadio1.setValue({ radio1: value });
  // }

  ngOnInit() {
    //RECUPERER L'ID DU METIER
    this.id=this.route.snapshot.params["id"]
    this.serviceMetier.RetrouverParIdMetiers(this.id).subscribe(data=>{
      this.metier=data;
      this.parcours = this.metier.parcours
      console.log(data);
    })
 }

   //LA METHODE PERMETTANT DE NAVIGUER VERS LA PAGE DETAILS PARCOURS
   goToDettailParcours(id: number) {
    console.log(id);
    return this.router.navigate(['base/collapse', id])
  }
}
