import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  
}
