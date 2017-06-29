import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { ControllerModule } from './controller/controller.module';
import { ScoreModule } from './scoreboard/score.module';
import { TitleModule } from './title/title.module';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    ControllerModule,
    FormsModule,
    HttpModule,
    ScoreModule,
    TitleModule
  ],

  providers: [],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
