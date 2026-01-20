import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportClientsComponent } from './pages/import-clients/import-clients.component';
import { UpdatePostcodesComponent } from './pages/update-postcodes/update-postcodes.component';
import { ClientsListComponent } from './pages/clients-list/clients-list.component';
import { LogsListComponent } from './pages/logs-list/logs-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'import', pathMatch: 'full' },
  { path: 'import', component: ImportClientsComponent },
  { path: 'update-postcodes', component: UpdatePostcodesComponent },
  { path: 'clients', component: ClientsListComponent },
  { path: 'logs', component: LogsListComponent },
  { path: '**', redirectTo: 'import' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
