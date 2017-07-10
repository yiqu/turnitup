import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserResult } from './user-result.model';

/**
 * Result data store
 * 
 */
export class ResultDataStore {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<UserResult[]> = new BehaviorSubject<UserResult[]>([]);
  get data(): UserResult[] { return this.dataChange.value; }

  constructor() {}

  /** Adds a new result to the datastore. */
  appendResult(turn: number, result: number, goal: number) {
    let userResult = result + ' on ' + goal;
    let difference = goal - result;

    const copiedData = this.data.slice();
    copiedData.unshift(this.addNewResult(turn.toString(), userResult, difference.toString()));
    this.dataChange.next(copiedData);
  }

    /** Builds and returns a new result */
  private addNewResult(turn: string, result: string, difference: string) {
    return {
      turn: turn,
      result: result,
      difference: difference
    };
  }
}