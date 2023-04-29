import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/lesServices/client.service';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {
  ClientForm!: FormGroup;
  valeur: any;
  constructor(  private clientService: ClientService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public router: Router,
    private http: HttpClient ) { }
  pro!:any;
  ngOnInit(): void {
    
    this.ClientForm=this.fb.group({
      'cin':[],
      'email':[],
      'nom':[],
      'prenom':[],
      'adresse':[],
      'password':[]
    })

    let ident=this.route.params.subscribe(params=>{
      this.valeur=params['id'];

  
      });
   console.log(this.valeur)
    this.clientService.getClientById(this.valeur).subscribe(data=>{
      this.pro=data;
      console.log(data)
      this.ClientForm.controls['cin'].setValue(this.pro.cin);
      this.ClientForm.controls['email'].setValue(this.pro.email);
      this.ClientForm.controls['nom'].setValue(this.pro.nom);
      this.ClientForm.controls['prenom'].setValue(this.pro.prenom);
      this.ClientForm.controls['adresse'].setValue(this.pro.adresse);
      this.ClientForm.controls['password'].setValue(this.pro.password);


    })
  }


  UpdateClient(values:any) {
   
     
    console.log(values);
    let formDATA= new FormData();
    formDATA.append('cin',values.name);
    formDATA.append('email',values.email);
    formDATA.append('nom',values.phoneNumber);
    formDATA.append('prenom',values.prenom);
    formDATA.append('adresse',values.address);
    formDATA.append('password',values.password);
    
     console.log(this.valeur)
      this.clientService.updateClient(formDATA).subscribe(res=>{
        console.log(res);
        this.router.navigate(['/listClient'])

      });
  }
}
