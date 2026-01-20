import { Component } from '@angular/core';
import { ClientsApiService } from '../../services/clients-api.service';

@Component({
  selector: 'app-update-postcodes',
  templateUrl: './update-postcodes.component.html',
  styleUrls: ['./update-postcodes.component.css']
})
export class UpdatePostcodesComponent {
  loading = false;
  message = '';
  error = '';

  constructor(private api: ClientsApiService) {}

  run() {
    this.message = '';
    this.error = '';
    this.loading = true;

    this.api.updatePostCodes().subscribe({
      next: (res) => {
        this.message = `Postcode update completed. Response: ${JSON.stringify(res)}`;
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