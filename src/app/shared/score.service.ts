import { Injectable } from '@angular/core';


/**
 * Injectable aervice to detect if it is mobile platform
 */
@Injectable()
export class ScoreService {

  isTouchDevice: boolean = false;

  /**
   * Constructor
   */
  constructor() {}
}