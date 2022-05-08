import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Expo } from '../models/expo';
import { Route } from '../utils/route';
import { StandardRestService } from './standard-rest';

@Injectable({
  providedIn: 'root'
})
export class ExpoService extends StandardRestService<Expo> {

  constructor(
    protected override http: HttpClient
  ) { 
    super(http, 'ExpoController')
  }

  backUrl = Route.EXPO_LIST

  readOne(id: number) {
    return of(
      {
        Id: 1,
        RegistrationNumber: 1,
        City: 'Novi Sad',
        Address: 'Jevrejska 53',
      }
    )
  }
}
