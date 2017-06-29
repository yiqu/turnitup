import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'game-title',
  templateUrl: 'title.component.html',
  styleUrls: ['./title.component.css']
})

export class TitleComponent {

  gameTitle: string = "Turn It Up!";

  constructor() {}

}