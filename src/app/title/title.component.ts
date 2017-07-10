import { Component } from '@angular/core';
import { ScoreService } from '../shared/score.service';

// App version
const { version: appVersion } = require('../../../package.json')

@Component({
  moduleId: module.id,
  selector: 'game-title',
  templateUrl: 'title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {

  gameTitle: string = "Turn It Up";
  appVersion: string;

  constructor(public scoreService: ScoreService){
    this.appVersion = appVersion
  }

}