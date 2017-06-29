import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreComponent } from './score.component';

@NgModule({
  declarations: [
    ScoreComponent
  ],

  imports: [
    CommonModule
  ],

  providers: [],

  exports: [
    ScoreComponent
  ]
})
export class ScoreModule {}
