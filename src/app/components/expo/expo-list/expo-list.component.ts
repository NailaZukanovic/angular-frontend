import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Expo } from 'src/app/models/expo';
import { ExpoService } from 'src/app/services/expo.service';

@Component({
  selector: 'app-expo-list',
  templateUrl: './expo-list.component.html',
  styleUrls: ['./expo-list.component.scss']
})
export class ExpoListComponent implements OnInit {

  constructor(
    private expoService: ExpoService,
    private router: Router
  ) { }

  expos: Expo[]

  ngOnInit() {
    //this.expoService.read().subscribe(res => this.expos = res)
    this.expos = [
      {
        Id: 1,
        RegistrationNumber: 1,
        City: 'Novi Sad',
        Address: 'Jevrejska 53',
      },
      {
        Id: 2,
        RegistrationNumber: 2,
        City: 'Beograd',
        Address: 'Ruzveltova 12',
      },
      {
        Id: 3,
        RegistrationNumber: 3,
        City: 'Zrenjanin',
        Address: 'Mike Antica 24',
      }
    ]
  }

  create() {
    this.router.navigate(['expo-form/new'])
  }

  edit(item: Expo) {
    this.router.navigate([`expo-form/${item.Id}`])
  }

  async delete(item: Expo) {
    this.expoService.delete(item.Id).subscribe(res => {
      this.ngOnInit()
    })
  }

  displayedColumns = ['Id', 'RegistrationNumber', 'City', 'Address', 'Actions']

  get dataSource() {
    return new MatTableDataSource(this.expos || [])
  }

}
