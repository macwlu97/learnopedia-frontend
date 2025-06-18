import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BlockDataService {
  private baseUrl = 'http://localhost:8080/api'; // Zakładamy lokalny backend

  constructor(private http: HttpClient) {}

  getCurrentBlocks(): Observable<any> {
    return  of(null);
    // return this.http.get(`${this.baseUrl}/blocks`);
  }

  getStats(): Observable<any> {
    return  of(null);
    // return this.http.get(`${this.baseUrl}/stats`);
  }
}
