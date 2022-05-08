import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Worker } from 'src/app/models/worker';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.scss']
})
export class WorkerListComponent implements OnInit {

  constructor(
    private workerService: WorkerService,
    private router: Router
  ) { }

  workers: Worker[]

  ngOnInit() {
    this.workerService.read().subscribe(res => this.workers = res)
  }

  create() {
    this.router.navigate(['worker-form/new'])
  }

  edit(item: Worker) {
    this.router.navigate([`worker-form/${item.Id}`])
  }

  async delete(item: Worker) {
    this.workerService.delete(item.Id).subscribe(res => {
      this.ngOnInit()
    })
  }

  displayedColumns = ['Id', 'JMBG', 'FirstName', 'LastName', 'ParentName', 'Address', 'PhoneNumbers', 'EmailAddresses', 'Role', 'HiredFromDate', 'HiredUntilDate', 'ExpoId', 'Actions']

  get dataSource() {
    return new MatTableDataSource(this.workers || [])
  }

}
