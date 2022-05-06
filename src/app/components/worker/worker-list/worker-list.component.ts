import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Worker } from 'src/app/models/worker';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.scss']
})
export class WorkerListComponent implements OnInit {

  constructor(
    private workerService: WorkerService
  ) { }

  workers: Worker[]

  ngOnInit() {
    this.workerService.read().subscribe(res => this.workers = res)
  }

  displayedColumns = ['Id', 'JMBG', 'FirstName', 'LastName', 'ParentName', 'Address', 'PhoneNumbers', 'EmailAddresses', 'Role', 'HiredFromDate', 'HiredUntilDate', 'ExpoId', 'Actions']

  get dataSource(){
    return new MatTableDataSource(this.workers || [])
  }

}
