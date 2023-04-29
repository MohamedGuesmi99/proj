import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goCinema(){
    this.router.navigate(['/cinema'])
  }
  goRestaurant(){
    this.router.navigate(['/restaurant'])
  }
  goHotel(){
    this.router.navigate(['/hotel'])
  }
  goguesthouse(){
    this.router.navigate(['/guesthouse'])
  }

}
