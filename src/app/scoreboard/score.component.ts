import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { ScoreService } from '../shared/score.service';

@Component({
  moduleId: module.id,
  selector: 'game-score',
  templateUrl: 'score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnChanges{

  @Input() 
  userVolume: number;
  @Input()
  turnChange: number;

  // the first goal when page loads
  goalVolume: number = 5;
  // User's result
  userResult: number;
  // cat's request
  requestMessage: string;
  // result message
  resultMessage: string = "Hi there, can you help me...";
  // previous goal
  previousGoalVolume: number;


  /**
   * Constructor
   * 
   */
  constructor() {}
  

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {

    this.requestMessage = "Turn the vol. to " + this.goalVolume + " pls..";
    this.previousGoalVolume = this.goalVolume;

    // Record how user did, and turn number
    if (changes['userVolume'] !== undefined) {
      this.userResult = changes['userVolume'].currentValue;
    }
    console.log('Goal is: '+ this.goalVolume + '. You hit: ' + this.userResult + '. Turn: ' + this.turnChange);

    // compare results
    if (this.userResult === undefined) {
      // first turn
    } else {
      let difference = Math.abs(this.goalVolume - this.userResult);
      console.log('difference: ' + difference);

      switch (true) {
        case (difference > 15): //bigger than 15
          this.resultMessage = this.userResult + "? Are you even trying? Whatever...";
          this.updateRequestMessage();
          break;
        case (difference <= 15 && difference > 10): //between 10 and 15*
          this.resultMessage = "That's not what I asked for! Actually...";
          this.updateRequestMessage();
          break;
        case (difference <= 10 && difference > 5): //between 5 and 10*:
          this.resultMessage = "Almost.. but I asked for " + this.goalVolume + '. Forget it...';
          this.updateRequestMessage();
          break;
        case (difference <= 5 && difference >= 1): //between 1 and 5*:
          this.resultMessage = "Close... But not close enough! Instead...";
          this.updateRequestMessage();
          break;
        case (difference === 0): // exactly right
          this.resultMessage = "Perfect! Thank you, kind human!";
          this.updateRequestMessage(true);
          break;
        default:
            this.resultMessage = "Meow";
      }

    }

  }

  updateRequestMessage(correct: boolean = false): void {
    // Set new goal volume, and new request message
    this.goalVolume = this.generateGoal(1, 10);
    
    if (correct) {
      this.requestMessage = "Wait. turn to " + this.goalVolume + " now..";
    } else {
      this.requestMessage = "Turn the vol. to " + this.goalVolume + " pls..";
    }
  }

  generateGoal(min, max): number {
    return Math.floor(Math.random()*(max-min+1)+min);
  }
}