import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlockInfo } from '../models/block-info.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlockDataService {
  private readonly apiUrl = 'http://localhost:8081/api/blocks'; // zmień port jeśli trzeba

  constructor(private http: HttpClient) {}

  getBlocks(): Observable<BlockInfo[]> {
    return this.http.get<BlockInfo[]>(this.apiUrl);
  }

  getBlockById(id: string): Observable<BlockInfo> {
    return this.http.get<BlockInfo>(`${this.apiUrl}/${id}`);
  }
}
