import { ConfigService } from './../ConfigService';
import { Subscription } from 'rxjs';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox/public_api';
import { AfterViewInit, ViewChild, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete-country',
  templateUrl: './autocomplete-country.component.html',
  styleUrls: ['./autocomplete-country.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteCountryComponent implements OnInit, AfterViewInit {

  @ViewChild('myComboBox', {static: false}) jqxComboBox: jqxComboBoxComponent;

  // countries = [
  //   "England",
  //   "New zealand",
  //   "India",
  //   "Australia"
  // ]

  resultLimit = 15;
  sourceData = [];
  requestSubscription: Subscription;

  constructor(public configService: ConfigService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.jqxComboBox.source(this.countries);
    
    this.jqxComboBox.source([]);
    this.jqxComboBox.search(this.countrySearch.bind(this));
  }

  countrySearch(countryString) {
    console.log(countryString);

    if (typeof (countryString) == "string") {

      // Unsubscribe if previous request is pending
      if (this.requestSubscription && !this.requestSubscription.closed) {
          this.requestSubscription.unsubscribe();
      }

      const country = countryString.trim();
      const request = this.configService.getConfig(country);

      this.requestSubscription = request.subscribe(this.updateAutocomplete.bind(this, country));
    }
  }

  updateAutocomplete(country, result) {
    console.log(result);
    console.log(country);
    if (result.length > 0) {
      this.sourceData = result.splice(0, this.resultLimit);
      this.jqxComboBox.source(this.sourceData);

      const countryElement = this.jqxComboBox.host.find('input')[0];
      countryElement.focus();

      this.jqxComboBox.selectedIndex(0);
      this.jqxComboBox.val(country);
    }
  }

  clearSearchInput() {
    this.jqxComboBox.clearSelection();
    this.jqxComboBox.val("");
    this.jqxComboBox.focus();
    this.jqxComboBox.selectedIndex(-1);
    this.jqxComboBox.close();

    console.log("clearSearchInput");
}

  onChange(event: any): void {
    console.log("onChange called with:", event);
  }

  onCloseAutocomplete(event: any): void {
    console.log("onClose called with:", event);
  }

  renderer = (index: number, label: string, value: any): string => {
    console.log("Rendering security: index");
    let datarecord = this.sourceData[index];

    let countryName = datarecord.name;

    return `<span>${countryName}</span>`;
  }
}
