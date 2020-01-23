import { AutocompleteCountryComponent } from './../autocomplete-country/autocomplete-country.component';
import { ConfigService } from './../ConfigService';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {

  

  constructor(public configService: ConfigService) {

  }

  ngOnInit() {
  }

  // onClicked() {
  //   this.jqxComboBox.val('');
  // }
}
