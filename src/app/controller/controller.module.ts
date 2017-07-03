import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControllerComponent } from './controller.component';
import { ScoreModule } from '../scoreboard/score.module';
import { ScoreService } from '../shared/score.service';
import { MdButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    ControllerComponent
  ],

  imports: [
    CommonModule,
    MdButtonModule,
    ScoreModule
  ],

  providers: [
    ScoreService
  ],

  exports: [
    ControllerComponent
  ]
})
export class ControllerModule {}
