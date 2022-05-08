import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankFormComponent } from './components/bank/bank-form/bank-form.component';
import { BankListComponent } from './components/bank/bank-list/bank-list.component';
import { ClientFormComponent } from './components/client/client-form/client-form.component';
import { ClientListComponent } from './components/client/client-list/client-list.component';
import { ExpoFormComponent } from './components/expo/expo-form/expo-form.component';
import { ExpoListComponent } from './components/expo/expo-list/expo-list.component';
import { WorkerFormComponent } from './components/worker/worker-form/worker-form.component';
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
    path: `${Route.BANK_FORM}/new`,
    component: BankFormComponent
  },
  {
    path: `${Route.CLIENT_FORM}/new`,
    component: ClientFormComponent
  },
  {
    path: `${Route.EXPO_FORM}/new`,
    component: ExpoFormComponent
  },
  {
    path: `${Route.WORKER_FORM}/new`,
    component: WorkerFormComponent
  },
  {
    path: `${Route.BANK_FORM}/:${Route.ENTITY_ID}`,
    component: BankFormComponent
  },
  {
    path: `${Route.CLIENT_FORM}/:${Route.ENTITY_ID}`,
    component: ClientFormComponent
  },
  {
    path: `${Route.EXPO_FORM}/:${Route.ENTITY_ID}`,
    component: ExpoFormComponent
  },
  {
    path: `${Route.WORKER_FORM}/:${Route.ENTITY_ID}`,
    component: WorkerFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
