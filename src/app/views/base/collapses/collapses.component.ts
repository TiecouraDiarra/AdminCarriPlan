import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParcoursService } from 'src/app/_services/parcours/parcours.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-collapses',
  templateUrl: './collapses.component.html',
  styleUrls: ['./collapses.component.scss']
})
export class CollapsesComponent implements OnInit{

  collapses = [false, false, false, false];
  image: string = environment.imageUrl

  constructor(
    private route: ActivatedRoute,
    private serviceParcours : ParcoursService
    ) { }

  parcours : any
  metier : any
  matiere : any
  id:any
  

  toggleCollapse(id: number): void {
    // @ts-ignore
    this.collapses[id] = !this.collapses[id];
  }

  ngOnInit() {

    //RECUPERER L'ID DU PARCOURS
    this.id=this.route.snapshot.params["id"]
    this.serviceParcours.RetrouverParIdParcours(this.id).subscribe(data=>{
      this.parcours=data;
      console.log(data);
    })

    //RECUPERER LES METIERS EN FONCTION D'UN PARCOURS
    // this.service.RecupererMetierParParcours(this.id).subscribe(data => {
    //   this.metier = data;
    // })
  }

}
