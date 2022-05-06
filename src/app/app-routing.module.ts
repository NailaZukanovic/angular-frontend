import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankListComponent } from './components/bank/bank-list/bank-list.component';
import { ClientListComponent } from './components/client/client-list/client-list.component';
import { ExpoListComponent } from './components/expo/expo-list/expo-list.component';
import { WorkerListComponent } from './components/worker/worker-list/worker-list.component';
import { Route } from './utils/route';

const routes: Routes = [
  {
    path: Route.BANK_LIST,
    component: BankListComponent
  },
  {
    path: Route.CLIENT_LIST,
    component: ClientListComponent
  },
  {
    path: Route.EXPO_LIST,
    component: ExpoListComponent
  },
  {
    path: Route.WORKER_LIST,
    component: WorkerListComponent
  },
  {
    path: `${Route.BANK_FORM}/:${Route.ENTITY_ID}`,
    component: WorkerListComponent
  },
  {
    path: Route.WORKER_LIST,
    component: WorkerListComponent
  },
  {
    path: Route.WORKER_LIST,
    component: WorkerListComponent
  },
  {
    path: Route.WORKER_LIST,
    component: WorkerListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
