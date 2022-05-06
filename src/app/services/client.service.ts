import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
