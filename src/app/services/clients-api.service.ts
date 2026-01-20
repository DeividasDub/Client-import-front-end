import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({ providedIn: 'root' })
export class ClientsApiService {
  private base = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.base}/api/clients`);
  }

  updatePostCodes(): Observable<any> {
    return this.http.post(`${this.base}/api/clients/update-postcodes`, {});
  }

  importClients(file: File): Observable<any> {
    const form = new FormData();
    form.append('File', file, file.name);
    return this.http.post(`${this.base}/api/clients/import`, form);
  }
}