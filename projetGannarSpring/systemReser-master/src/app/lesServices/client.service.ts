import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Client } from '../lesClasses/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = 'http://localhost:8020/clients';

  constructor(private http: HttpClient) { }

  getClientsList(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl);
    
  }

  createClient(client: Client): Observable<Client> {
    const url = 'http://localhost:8020/createC';
    return this.http.post<Client>(url,client).pipe(map(data => data));
  }

  getClientById(id: number) {
    const url ='http://localhost:8020/clients/'+id;
    return this.http.get(url).pipe(map(data => data));
  }

  updateClient(client: any): Observable<any> {
    const id = client.id;
    const url = `${this.baseUrl}/updateClient/${id}`;

    return this.http.put(url, client);
  }
  deleteClient(id: number): Observable<any> {
    return this.http.delete('http://localhost:8020/deleteClient/'+id);
  }
}
