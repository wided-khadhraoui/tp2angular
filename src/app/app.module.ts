import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importez FormsModule
import { AppComponent } from './app.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';

@NgModule({
  declarations: [
    AppComponent,
    CarteVisiteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Ajoutez FormsModule ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
