import { Component } from '@angular/core';
import { ScoreService } from '../../shared/score.service';

// App version
const { version: appVersion } = require('../../../../package.json')

/**
 * Title component consists of title and game rules HTML.
 * 
 */
@Component({
  moduleId: module.id,
  selector: 'game-title',
  templateUrl: 'title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {

  gameTitle: string = "Turn It Up";
  appVersion: string;

  /**
   * constructor
   * 
   * @param {ScoreService} scoreService injected score service for updating 
   *  "!" based on device.
   */
  constructor(public scoreService: ScoreService){
    this.appVersion = appVersion
  }
}