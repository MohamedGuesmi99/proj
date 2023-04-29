import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../lesClasses/reservation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http:HttpClient) { }

  getReservations(){
    return this.http.get("http://localhost:8080/reservation/fetchAll")  
  }
  getReservationById(id:number){
    return this.http.get("http://localhost:8080/reservation/fetch/"+id)  
  }
  addReservation(r:Reservation):Observable<Reservation>{
    return this.http.post<Reservation>("http://localhost:8080/reservation/add",r);
  }
  updateReservation(id:number, r:Reservation):Observable<Reservation>{
    return this.http.put<Reservation>('http://localhost:8080/reservation/update/'+ id, r);
  }
  deleteReservation(id:number){
    return this.http.delete("http://localhost:8080/reservation/delete/" + id);
  }
}
