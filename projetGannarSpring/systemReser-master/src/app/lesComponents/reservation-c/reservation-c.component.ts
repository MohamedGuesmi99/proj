import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Reservation } from 'src/app/lesClasses/reservation';
import { ReservationService } from 'src/app/lesServices/reservation.service';

@Component({
  selector: 'app-reservation-c',
  templateUrl: './reservation-c.component.html',
  styleUrls: ['./reservation-c.component.css']
})
export class ReservationCComponent implements OnInit {

  reservationForm !: FormGroup
  AllReservations : Reservation[]=[]
  hideform = true
  constructor(private fb:FormBuilder,private rs:ReservationService) { }

  ngOnInit(): void {
    this.reservationForm = this.fb.nonNullable.group({
      idRes : [''],
      dateRes : [''],
      nbPrs : [''],
    });
    this.rs.getReservations().subscribe((res:any)=>{
      this.AllReservations = res;
    })
  }
  DeleteReservations(t:number){
    this.rs.deleteReservation(t).subscribe(
      () =>  this.AllReservations = this.AllReservations.filter(r=> r.idRes != t)
    );}
  
  ChangeReservation(form : Reservation){
    this.hideform = false;
    this.reservationForm.get('dateRes')?.setValue(form.dateRes);
    this.reservationForm.get('nbPrs')?.setValue(form.nbPrs);
    
  }
  UpdateReservation(r:Reservation){
    this.rs.updateReservation(r.idRes,this.reservationForm.value).subscribe();
  }
  AddReservation(){
    if(confirm()==true){
    this.rs.addReservation(this.reservationForm.value).subscribe(
      data => this.AllReservations.push(data)
    );}
  }

}
