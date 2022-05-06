import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './components/utils/toolbar/toolbar.component';
import { BankListComponent } from './components/bank/bank-list/bank-list.component';
import { ExpoListComponent } from './components/expo/expo-list/expo-list.component';
import { WorkerListComponent } from './components/worker/worker-list/worker-list.component';
import { ClientListComponent } from './components/client/client-list/client-list.component';
import { BankFormComponent } from './components/bank/bank-form/bank-form.component';
import { ClientFormComponent } from './components/client/client-form/client-form.component';
import { ExpoFormComponent } from './components/expo/expo-form/expo-form.component';
import { WorkerFormComponent } from './components/worker/worker-form/worker-form.component';
import { FormComponent } from './components/utils/form/form.component';
import { SpinnerComponent } from './components/utils/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BankListComponent,
    ExpoListComponent,
    WorkerListComponent,
    ClientListComponent,
    BankFormComponent,
    ClientFormComponent,
    ExpoFormComponent,
    WorkerFormComponent,
    FormComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
