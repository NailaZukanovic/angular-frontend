import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Expo } from 'src/app/models/expo';
import { ExpoService } from 'src/app/services/expo.service';

@Component({
  selector: 'app-expo-list',
  templateUrl: './expo-list.component.html',
  styleUrls: ['./expo-list.component.scss']
})
export class ExpoListComponent implements OnInit {

  constructor(
    private expoService: ExpoService
  ) { }

  expos: Expo[]

  ngOnInit() {
    this.expoService.read().subscribe(res => this.expos = res)
  }

  displayedColumns = ['Id', 'ClientId', 'ExpoId', 'Balance', 'Actions']

  get dataSource(){
    return new MatTableDataSource(this.expos || [])
  }

}
