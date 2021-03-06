import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { EventLogComponent } from './event-log.component';

import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule, ChartsModule ],
  declarations: [ AppComponent, EventLogComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
