import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Log } from '../models/log';

@Injectable({ providedIn: 'root' })
export class LogsApiService {
  private base = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getLogs(): Observable<Log[]> {
    return this.http.get<Log[]>(`${this.base}/api/logs`);
  }
}