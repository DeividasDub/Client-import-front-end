import { Component } from '@angular/core';
import { ClientsApiService } from '../../services/clients-api.service';

@Component({
  selector: 'app-import-clients',
  templateUrl: './import-clients.component.html',
  styleUrls: ['./import-clients.component.css']
})
export class ImportClientsComponent {
  selectedFile: File | null = null;
  loading = false;
  message = '';
  error = '';

  constructor(private api: ClientsApiService) {}

  onFileChange(ev: Event) {
    const input = ev.target as HTMLInputElement;
    this.selectedFile = input.files?.[0] ?? null;
  }

  import() {
    this.message = '';
    this.error = '';

    if (!this.selectedFile) {
      this.error = 'Please select a JSON file.';
      return;
    }

    this.loading = true;

    this.api.importClients(this.selectedFile).subscribe({
      next: (res) => {
        this.message = `Import completed successfully. Response: ${JSON.stringify(res)}`;
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