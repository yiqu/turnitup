import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreComponent } from './score.component';
import { ScoreService } from '../../shared/score.service';
import { WinnerDisplayPipe } from '../../pipes/score.pipe';

import { CdkTableModule } from '@angular/cdk/table';
import { 
  MdCardModule, 
  MdSortModule, 
  MdTableModule } from '@angular/material';

@NgModule({
  declarations: [
    ScoreComponent,
    WinnerDisplayPipe
  ],

  imports: [
    CommonModule,
    CdkTableModule,
    MdCardModule,
    MdSortModule,
    MdTableModule
  ],

  providers: [],

  exports: [
    ScoreComponent
  ]
})
export class ScoreModule {}
