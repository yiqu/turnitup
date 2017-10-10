import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreComponent } from './score.component';
import { ScoreService } from '../../shared/score.service';
import { WinnerDisplayPipe } from '../../pipes/score.pipe';

import { CdkTableModule } from '@angular/cdk/table';
import { 
  MatCardModule, 
  MatSortModule, 
  MatTableModule } from '@angular/material';

@NgModule({
  declarations: [
    ScoreComponent,
    WinnerDisplayPipe
  ],

  imports: [
    CommonModule,
    CdkTableModule,
    MatCardModule,
    MatSortModule,
    MatTableModule
  ],

  providers: [],

  exports: [
    ScoreComponent
  ]
})
export class ScoreModule {}
