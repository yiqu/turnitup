import { Injectable } from '@angular/core';


/**
 * Injectable Socre Service. Scores are sent through this service.
 */
@Injectable()
export class ScoreService {

  isTouchDevice: boolean = false;

  /**
   * Constructor
   */
  constructor() {}
}