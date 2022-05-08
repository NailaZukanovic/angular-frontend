import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
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
