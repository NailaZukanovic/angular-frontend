import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Client } from '../models/client';
import { Route } from '../utils/route';
import { StandardRestService } from './standard-rest';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends StandardRestService<Client> {

  constructor(
    protected override http: HttpClient
  ) { 
    super(http, 'ClientController')
  }

  backUrl = Route.CLIENT_LIST

  readOne(id: number) {
    return of(
      {
        Id: 1,
        BankAccountId: 1,
        JMBG: "1231231231231",
        FirstName: 'Sinisa',
        LastName: 'Sinisic',
        ParentName: 'Sika',
        Address: 'Stanislava Binickog',
        PhoneNumber: '06012312312'
      }
    )
  }

}
