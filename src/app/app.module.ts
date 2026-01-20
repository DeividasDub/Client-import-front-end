import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImportClientsComponent } from './pages/import-clients/import-clients.component';
import { UpdatePostcodesComponent } from './pages/update-postcodes/update-postcodes.component';
import { ClientsListComponent } from './pages/clients-list/clients-list.component';
import { LogsListComponent } from './pages/logs-list/logs-list.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ImportClientsComponent,
    UpdatePostcodesComponent,
    ClientsListComponent,
    LogsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
