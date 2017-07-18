import { HighlightDirective } from './highlight.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
