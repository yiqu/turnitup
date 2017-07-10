import { Pipe, PipeTransform } from '@angular/core';
/*
 * Display for when user scored a difference of 0.
 * Usage:
 *   value | winner
 * Example:
 *   {{ 0 |  winner}}
 *   formats to: Perfect!
*/
@Pipe({name: 'winner'})
export class WinnerDisplayPipe implements PipeTransform {
  transform(value: string): string {
    return value === "0" ? "Perfect!" : value;
  }
}