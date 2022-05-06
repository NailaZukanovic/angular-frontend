import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Bank } from 'src/app/models/bank';
import { BankService } from 'src/app/services/bank.service';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss']
})
export class BankListComponent implements OnInit {

  constructor(
    private bankService: BankService
  ) { }

  banks: Bank[]

  ngOnInit() {
    this.bankService.read().subscribe(res => this.banks = res)
  }

  displayedColumns = ['Id', 'AccountType', 'CurrencyType', 'Balance', 'Actions']

  get dataSource(){
    return new MatTableDataSource(this.banks || [])
  }

}
