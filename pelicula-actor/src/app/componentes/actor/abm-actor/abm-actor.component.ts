import { Component, OnInit, Output } from '@angular/core';
import { Actor } from '../../../clases/actor';

@Component({
  selector: 'app-abm-actor',
  templateUrl: './abm-actor.component.html',
  styleUrls: ['./abm-actor.component.css']
})
export class AbmActorComponent implements OnInit 
{
  @Output() actor: Actor;
  
  constructor() { }

  ngOnInit() {
  }

}
