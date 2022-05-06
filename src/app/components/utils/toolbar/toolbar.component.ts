import { Component } from '@angular/core';
import { Route } from 'src/app/utils/route';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  BANK_LIST = Route.BANK_LIST
  CLIENT_LIST = Route.CLIENT_LIST
  EXPO_LIST = Route.EXPO_LIST
  WORKER_LIST = Route.WORKER_LIST

}
