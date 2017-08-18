import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { BodyModule } from './body/body.module';
import { NotFoundModule } from './404/404.module';

import { ScoreModule } from './body/scoreboard/score.module';
import { TitleModule } from './body/title/title.module';
import { ControllerModule } from './body/controller/controller.module';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    BodyModule,
    FormsModule,
    HttpModule,
    NotFoundModule,
    ScoreModule,
    TitleModule,
    ControllerModule
  ],

  providers: [],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
