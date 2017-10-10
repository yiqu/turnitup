import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControllerComponent } from './controller.component';
import { ScoreModule } from '../scoreboard/score.module';
import { ScoreService } from '../../shared/score.service';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    ControllerComponent
  ],

  imports: [
    CommonModule,
    MatButtonModule,
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
