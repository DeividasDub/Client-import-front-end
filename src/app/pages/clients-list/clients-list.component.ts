import { Component } from '@angular/core';
import { ClientsApiService } from '../../services/clients-api.service';
import { Client } from '../../models/client';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent {
  clients: Client[] = [];
  loading = false;
  error = '';

  constructor(private api: ClientsApiService) {}

  load() {
    this.loading = true;
    this.error = '';

    this.api.getClients().subscribe({
      next: (data) => {
        this.clients = data ?? [];
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.error
          ? (typeof err.error === 'string' ? err.error : JSON.stringify(err.error))
          : 'An error occurred.';
        this.loading = false;
      }
    });
  }
}