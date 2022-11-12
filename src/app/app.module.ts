import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import {FormsModule} from "@angular/forms";
import { RainbowSimulatorDirective } from './rainbow-simulator.directive';

@NgModule({
  declarations: [
    AppComponent,
    MiniWordComponent,
    RainbowSimulatorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
