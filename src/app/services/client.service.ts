import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  read(): Observable<Client[]> {
    return of([
      {
        Id: 1,
        BankAccountId: 1,
        JMBG: "1231231231231",
        FirstName: 'Sinisa',
        LastName: 'Sinisic',
        ParentName: 'Sika',
        Address: 'Stanislava Binickog',
        PhoneNumber: '06012312312'
      },
      {
        Id: 2,
        BankAccountId: 2,
        JMBG: "2342342342342",
        FirstName: 'Mika',
        LastName: 'Mikic',
        ParentName: 'Miklos',
        Address: 'Milivoja Blaznavca',
        PhoneNumber: '06023423423'
      },
      {
        Id: 3,
        BankAccountId: 3,
        JMBG: "3453453453453",
        FirstName: 'Pavle',
        LastName: 'Radenovic',
        ParentName: 'Vukan',
        Address: 'Ive Andrica',
        PhoneNumber: '06034534534'
      }
    ])
  }

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
