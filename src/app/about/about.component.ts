import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded About (changelog) component.
 */
@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: 'about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor() {}
    
  // change log information array
  changelog: Array<Object> = [
    {
      version: '1.0.0',
      date: new Date('6/30/17'),
      changes: 'Created initial version of game'
    },
    {
      version: '1.1.0',
      date: new Date('7/03/17'),
      changes: 'Added game logic'
    },
    {
      version: '1.1.1',
      date: new Date('7/04/17'),
      changes: 'Updated CSS for mobile responsive design'
    },
    {
      version: '1.1.2',
      date: new Date('7/05/17'),
      changes: 'Game controlls will change based on if device is mobile or desktop'
    },
    {
      version: '1.1.3',
      date: new Date('7/10/17'),
      changes: 'Added new cat picture when user wins a game'
    },
    {
      version: '1.1.4',
      date: new Date('7/19/17'),
      changes: 'CSS updates for mobile devices'
    },
    {
      version: '1.2.0',
      date: new Date('8/18/17'),
      changes: 'Refactored file structure and added CHANGE LOG page'
    },
    {
      version: '1.3.0',
      date: new Date('10/10/17'),
      changes: 'Chores'
    }
  ];
}
