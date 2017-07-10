import { Component, Input, OnChanges, SimpleChange, ViewChild } from '@angular/core';
import { MdSort } from '@angular/material';
import { ResultDataStore } from '../shared/data-store.db';
import { ResultDataSource } from '../shared/data-source.db';
import { ScoreService } from '../shared/score.service';

@Component({
  moduleId: module.id,
  selector: 'game-score',
  templateUrl: 'score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnChanges {

  @Input() 
  userVolume: number;
  @Input()
  turnChange: number;

  // the first goal when page loads
  goalVolume: number = 45;
  // User's result
  userResult: number;
  // cat's request
  requestMessage: string;
  // result message
  resultMessage: string = "Hi there, can you help me...";
  // previous goal
  previousGoalVolume: number;
  // game won
  didUserWin: boolean = false;
  // result table column order
  displayedColumns = ['turn', 'result', 'difference'];
  // datastore and source
  resultDataStore = new ResultDataStore();
  dataSource: ResultDataSource | null;

  @ViewChild(MdSort) 
  sort: MdSort;

  /**
   * Constructor
   * 
   */
  constructor() {}
  
  ngOnInit() {
    this.dataSource = new ResultDataSource(this.resultDataStore, this.sort);
  }


  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {

    this.requestMessage = "Turn the vol. to " + this.goalVolume + " pls..";
    this.previousGoalVolume = this.goalVolume;
    this.didUserWin = false;

    // Record how user did, and turn number
    if (changes['userVolume'] !== undefined) {
      this.userResult = changes['userVolume'].currentValue;
    }

    // compare results
    if (this.userResult === undefined) {
      // first turn
    } else {
      let difference = Math.abs(this.goalVolume - this.userResult);

      this.resultDataStore.appendResult(this.turnChange, this.userResult, this.goalVolume);

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
          this.didUserWin = true;
          this.updateRequestMessage(true);
          break;
        default:
            this.resultMessage = "Meow";
      }

    }

  }

  updateRequestMessage(correct: boolean = false): void {
    // Set new goal volume, and new request message
    this.goalVolume = this.generateGoal(99, 100);
    
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