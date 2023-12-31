import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { BottoneComponent } from './bottone/bottone.component';
import { ModalProiezioneComponent } from './modal-proiezione/modal-proiezione.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent,
    BottoneComponent,
    ModalProiezioneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
