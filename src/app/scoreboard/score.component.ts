import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'game-score',
  templateUrl: 'score.component.html',
  styleUrls: ['./score.component.css']
})

export class ScoreComponent {

  scoreTitle: string = "Score"

  constructor() {}


}