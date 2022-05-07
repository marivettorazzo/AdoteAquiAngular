import { TermoTutelaComponent } from './components/termo-tutela/termo-tutela.component';
import { SobreAdoteAquiComponent } from './components/sobre-adote-aqui/sobre-adote-aqui.component';
import { DoacaoComponent } from './components/doacao/doacao.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { AdocaoComponent } from './components/adocao/adocao.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactPageComponent,
    AdocaoComponent,
    GaleriaComponent,
    DoacaoComponent,
    SobreAdoteAquiComponent,
    TermoTutelaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
