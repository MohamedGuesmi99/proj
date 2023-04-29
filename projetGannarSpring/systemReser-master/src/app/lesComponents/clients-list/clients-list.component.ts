import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/lesClasses/client';
import { ClientService } from 'src/app/lesServices/client.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {
  clients!: Client[];
  client: Client = new Client();
  submitted = false;
  constructor(private clientService: ClientService,private router:Router) { }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.clientService.getClientsList().subscribe(data => {
      this.clients = data;
      console.log(this.clients)
    });
  }
  save() {
    this.clientService.createClient(this.client)
      .subscribe(data => console.log(data), error => console.log(error));
    this.client = new Client();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
  deleteClient(id: number) {
    this.clientService.deleteClient(id)
      .subscribe(
        data => {
          console.log(data);
          this.getClients();
        },
        error => console.log(error));
  }
  editClient(id:any){
    this.router.navigate(['/modifierClient',id])
  }
  
  

}
