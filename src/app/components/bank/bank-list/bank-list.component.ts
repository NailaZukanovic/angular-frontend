import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Bank } from 'src/app/models/bank';
import { BankService } from 'src/app/services/bank.service';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss']
})
export class BankListComponent implements OnInit {

  constructor(
    private bankService: BankService,
    private router: Router
  ) { }

  banks: Bank[]

  ngOnInit() {
    this.bankService.read().subscribe(res => this.banks = res)
  }

  create() {
    this.router.navigate(['bank-form/new'])
  }

  edit(item: Bank) {
    this.router.navigate([`bank-form/${item.Id}`])
  }

  async delete(item: Bank) {
    this.bankService.delete(item.Id).subscribe(res => {
      this.ngOnInit()
    })
  }

  displayedColumns = ['Id', 'ClientId', 'AccountType', 'CurrencyType', 'ExpoId', 'Balance', 'Actions']

  get dataSource() {
    return new MatTableDataSource(this.banks || [])
  }

}
