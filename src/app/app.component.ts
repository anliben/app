import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  dolar1: any;
  real1: any;

  dolar2: any;
  real2: any;

  constructor(
    private httpClient: HttpClient
  ){ }

  ngOnInit(): void { }

  converterToReal(){
    this.httpClient
    .get('https://economia.awesomeapi.com.br/json/last/BRL-USD')
    .subscribe((res: any) => {
      this.dolar1 = this.real1 * res.BRLUSD.bid;
    })
  }

  converterToDolar(){
      this.httpClient
      .get('https://economia.awesomeapi.com.br/json/last/USD-BRL')
      .subscribe((res: any) => {
        this.real2 = this.dolar2 * res.USDBRL.bid;
      })
  }

}
