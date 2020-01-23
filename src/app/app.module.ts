import { AutocompleteCountryComponent } from './../autocomplete-country/autocomplete-country.component';
import { ConfigService } from './../ConfigService';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { jqxBarGaugeModule  } from "jqwidgets-ng/jqxbargauge"; 
import { jqxComboBoxModule  } from "jqwidgets-ng/jqxcombobox"; 

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteCountryComponent
  ],
  imports: [
    BrowserModule,
    jqxBarGaugeModule,
    jqxComboBoxModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
