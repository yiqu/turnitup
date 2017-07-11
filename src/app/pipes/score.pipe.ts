import { Pipe, PipeTransform } from '@angular/core';

/*
 * Display based on the goal difference.
 * If difference is 0, display Perfect!
 * If difference is between 1-5, display So Close! (value).
 * 
 * Usage:
 *   value | winner
 * Example:
 *   {{ 0 |  winner}}
 *   formats to: Perfect!
*/
@Pipe({name: 'winner'})
export class WinnerDisplayPipe implements PipeTransform {
  transform(value: string): string {
    if (parseInt(value) > 0 && parseInt(value) <= 5) {
      return "So Close! (" + value + ")";
    } else if (value === "0") {
      return "Perfect!";
    } else {
      return value;
    }
  }
}