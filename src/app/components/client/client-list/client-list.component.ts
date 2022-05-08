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
    this.clientService.read().subscribe(res => this.clients = res)
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
