import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

 commandeForm!:FormGroup;


 	constructor(private router:Router, private api:ApiService, private formbuilder:FormBuilder){
 		this.commandeForm = this.formbuilder.group({

 			objet:['',Validators.required],
 			prix:['',Validators.required],
 			fournisseur:['', Validators.required],
 			quantité:['', Validators.required],
 			matricule:['', Validators.required],
 			date:['', Validators.required],
 			adresse:['', Validators.required]

 		})
 	}
	  ngOnInit(): void {
 	}
    
  }


