import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
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
