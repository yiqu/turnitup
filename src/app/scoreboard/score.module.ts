import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreComponent } from './score.component';
import { ScoreService } from '../shared/score.service';

import { CdkTableModule } from '@angular/cdk';
import { MdSortModule, MdTableModule } from '@angular/material';

@NgModule({
  declarations: [
    ScoreComponent
  ],

  imports: [
    CommonModule,
    CdkTableModule,
    MdSortModule,
    MdTableModule
  ],

  providers: [],

  exports: [
    ScoreComponent
  ]
})
export class ScoreModule {}
