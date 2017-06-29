import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControllerComponent } from './controller.component';
import { MdButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    ControllerComponent
  ],

  imports: [
    CommonModule,
    MdButtonModule
  ],

  providers: [],

  exports: [
    ControllerComponent
  ]
})
export class ControllerModule {}
