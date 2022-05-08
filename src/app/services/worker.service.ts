import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Worker } from '../models/worker';
import { Route } from '../utils/route';
import { StandardRestService } from './standard-rest';

@Injectable({
  providedIn: 'root'
})
export class WorkerService extends StandardRestService<Worker> {

  constructor(
    protected override http: HttpClient
  ) {
    super(http, 'WorkerController')
  }

  backUrl = Route.WORKER_LIST

  read(): Observable<Worker[]> {
    return of([
      {
        Id: 1,
        JMBG: '1111111111111',
        FirstName: 'Ime 1',
        LastName: 'Prezime 1',
        ParentName: 'Roditelj 1',
        Address: 'Adresa 1',
        PhoneNumbers: '06022222222',
        EmailAddresses: 'adresa1@gmail.com',
        Role: 'Sef',
        HiredFromDate: new Date('01-01-2021'),
        HiredUntilDate: new Date('01-01-2023'),
        ExpoId: 1,
        IsExpoChief: true
      },
      {
        Id: 2,
        JMBG: '2222222222222',
        FirstName: 'Ime 2',
        LastName: 'Prezime 2',
        ParentName: 'Roditelj 2',
        Address: 'Adresa 2',
        PhoneNumbers: '06022222222',
        EmailAddresses: 'adresa2@gmail.com',
        Role: 'Cistac',
        HiredFromDate: new Date('02-02-2021'),
        HiredUntilDate: new Date('02-02-2023'),
        ExpoId: 2,
        IsExpoChief: false
      },
      {
        Id: 3,
        JMBG: '3333333333333',
        FirstName: 'Ime 3',
        LastName: 'Prezime 3',
        ParentName: 'Roditelj 3',
        Address: 'Adresa 3',
        PhoneNumbers: '06055555555',
        EmailAddresses: 'adresa3@gmail.com',
        Role: 'Racunovodja',
        HiredFromDate: new Date('03-03-2021'),
        HiredUntilDate: new Date('03-03-2023'),
        ExpoId: 3,
        IsExpoChief: false
      }
    ])
  }

  readOne(id: number) {
    return of(
      {
        Id: 1,
        JMBG: '1111111111111',
        FirstName: 'Ime 1',
        LastName: 'Prezime 1',
        ParentName: 'Roditelj 1',
        Address: 'Adresa 1',
        PhoneNumbers: '06022222222',
        EmailAddresses: 'adresa1@gmail.com',
        Role: 'Sef',
        HiredFromDate: new Date('01-01-2021'),
        HiredUntilDate: new Date('01-01-2023'),
        ExpoId: 1,
        IsExpoChief: true
      }
    )
  }
}
