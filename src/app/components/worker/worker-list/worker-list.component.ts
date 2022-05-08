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
    //this.workerService.read().subscribe(res => this.workers = res)
    this.workers = [
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
    ]
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
