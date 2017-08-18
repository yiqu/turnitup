import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ControllerModule } from './controller/controller.module';
import { ScoreModule } from './scoreboard/score.module';
import { TitleModule } from './title/title.module';
import { BodyComponent } from './body.component';

import 'hammerjs';

@NgModule({
  declarations: [
    BodyComponent
  ],

  imports: [
    ControllerModule,
    FormsModule,
    HttpModule,
    ScoreModule,
    TitleModule
  ],

  exports:[
    BodyComponent
  ],

  providers: []
})
export class BodyModule {}
