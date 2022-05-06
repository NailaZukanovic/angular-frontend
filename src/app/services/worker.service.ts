import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
