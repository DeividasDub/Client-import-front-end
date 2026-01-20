import { Component } from '@angular/core';
import { LogsApiService } from '../../services/logs-api.service';
import { Log } from '../../models/log';

@Component({
  selector: 'app-logs-list',
  templateUrl: './logs-list.component.html',
  styleUrls: ['./logs-list.component.css']
})
export class LogsListComponent {
  logs: Log[] = [];
  loading = false;
  error = '';

  constructor(private api: LogsApiService) {}

  load() {
    this.loading = true;
    this.error = '';

    this.api.getLogs().subscribe({
      next: (data) => {
        this.logs = data ?? [];
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