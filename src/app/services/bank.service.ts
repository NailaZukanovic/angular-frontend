import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Bank } from '../models/bank';
import { Route } from '../utils/route';
import { StandardRestService } from './standard-rest';

@Injectable({
  providedIn: 'root'
})
export class BankService extends StandardRestService<Bank> {

  constructor(
    protected override http: HttpClient
  ) {
    super(http, 'BankController')
  }

  backUrl = Route.BANK_LIST

  read(): Observable<Bank[]> {
    return of([
      {
        Id: 1,
        ClientId: 1,
        AccountType: 'Dinar',
        CurrencyType: '',
        ExpoId: 1,
        Balance: 10000
      },
      {
        Id: 2,
        ClientId: 2,
        AccountType: 'Foreign',
        CurrencyType: 'USD',
        ExpoId: 2,
        Balance: 10000
      },
      {
        Id: 3,
        ClientId: 3,
        AccountType: 'Foreign',
        CurrencyType: 'EUR',
        ExpoId: 3,
        Balance: 10000
      }
    ])
  }

  readOne(id: number) {
    return of(
      {
        Id: 1,
        ClientId: 1,
        AccountType: 'Dinar',
        CurrencyType: 'RSD',
        ExpoId: 1,
        Balance: 10000
      }
    )
  }

}
