import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { first } from 'rxjs';
import { HttpClient } from '@angular/common/http';
 

@Component({
  selector: 'app-demande-service',
  templateUrl: './demande-service.component.html',
  styleUrls: ['./demande-service.component.css']
})
export class DemandeServiceComponent implements OnInit{


	angForm!: FormGroup;
 
 

  constructor (private formbuilder:FormBuilder, private api:ApiService, private http:HttpClient, private router:Router){
  	this.angForm = this.formbuilder.group({
     email_demandeur:['',[Validators.required, Validators.minLength(1), Validators.email]],
     numero_demandeur:['',Validators.required],
     enveloppe:['',Validators.required],
     type_service:['',Validators.required],
     lieu_service:['',Validators.required],
     objet_service:['',Validators.required],
     })
  }


  ngOnInit(): void {}


  postdata(angForm:any){
	this.api.services(angForm.value.email_demandeur,
	 angForm.value.numero_demandeur,
	 angForm.value.enveloppe, 
	 angForm.value.type_service, 
	 angForm.value.lieu_service, 
	 angForm.value.objet_service)
	.pipe(first())
	.subscribe(
		data => {
 			 alert("Demande enregistrée!");
		},error=>{
      
      alert("Pas connecter");
			 
		});
}

 


}
