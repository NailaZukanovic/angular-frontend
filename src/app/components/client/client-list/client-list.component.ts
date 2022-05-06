import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  constructor(
    private clientService: ClientService
  ) { }

  clients: Client[]

  ngOnInit() {
    this.clientService.read().subscribe(res => this.clients = res)
  }

  displayedColumns = ['Id', 'JMBG', 'FirstName', 'LastName', 'ParentName', 'Address', 'PhoneNumber', 'Actions']

  get dataSource(){
    return new MatTableDataSource(this.clients || [])
  }

}
