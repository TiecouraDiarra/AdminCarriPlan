import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutoevaluationService } from 'src/app/_services/autoevaluation/autoevaluation.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {

  customStylesValidated = false;
  browserDefaultsValidated = false;
  tooltipValidated = false;

  id:any
  Auto: any
  parcours : any
  reponses: any
  p1: number = 1;
  p2: number = 1;
  searchText1: any;
  searchText2: any;

  constructor(
    private route: ActivatedRoute,
    private serviceAuto : AutoevaluationService
    ) { }

  ngOnInit(): void {
    //RECUPERER L'ID AUTO
    this.id=this.route.snapshot.params["id"]
    this.serviceAuto.RetrouverParIdAuto(this.id).subscribe(data=>{
      this.Auto=data;
      console.log(data);
      this.parcours = this.Auto.parcours
      this.reponses = this.Auto.reponses
      console.log(this.parcours);
      console.log(this.reponses)
      // for (const t of this.parcours) {
      //   this.totalparcoursproposee += 1;
      // }
    })
   }

  // onSubmit1() {
  //   this.customStylesValidated = true;
  //   console.log('Submit... 1');
  // }

  // onReset1() {
  //   this.customStylesValidated = false;
  //   console.log('Reset... 1');
  // }

  // onSubmit2() {
  //   this.browserDefaultsValidated = true;
  //   console.log('Submit... 2');
  // }

  // onReset2() {
  //   this.browserDefaultsValidated = false;
  //   console.log('Reset... 3');
  // }

  // onSubmit3() {
  //   this.tooltipValidated = true;
  //   console.log('Submit... 3');
  // }

  // onReset3() {
  //   this.tooltipValidated = false;
  //   console.log('Reset... 3');
  // }


}
