import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	 loginform!: FormGroup;


   constructor (private formbuilder:FormBuilder,private router:Router, private api:ApiService, private http:HttpClient){
   	this.loginform = this.formbuilder.group({
   		email:['',[Validators.required, Validators.minLength(1), Validators.email]],
   		password:['',Validators.required],
   	});
   }

ngOnInit(): void {
	
}

postdata(loginform:any){
	this.api.userlogin(loginform.value.email,loginform.value.password)
	.pipe(first())
	.subscribe(
		data => {
			if (data.message == 'success') {
		
			const redirect = this.api.redirectUrl ? this.api.redirectUrl : '/home';
			this.router.navigate([redirect]);
			}
		},error=>{
			alert("user name or pass incorect");
		});
}

get email() {return this.loginform.get('email');}
get password() {return this.loginform.get('password');}
}
