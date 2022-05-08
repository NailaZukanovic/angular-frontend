import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  clients: Client[]

  ngOnInit() {
    //this.clientService.read().subscribe(res => this.clients = res)
    this.clients = [
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
    ]
  }

  create() {
    this.router.navigate(['client-form/new'])
  }

  edit(item: Client) {
    this.router.navigate([`client-form/${item.Id}`])
  }

  async delete(item: Client) {
    this.clientService.delete(item.Id).subscribe(res => {
      this.ngOnInit()
    })
  }

  displayedColumns = ['Id', 'BankAccountId', 'JMBG', 'FirstName', 'LastName', 'ParentName', 'Address', 'PhoneNumber', 'Actions']

  get dataSource() {
    return new MatTableDataSource(this.clients || [])
  }

}
