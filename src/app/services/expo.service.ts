import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
