import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { Child2Component } from './parent/child2/child2.component';
import { DataService } from './parent/data.service';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Child2Component
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
