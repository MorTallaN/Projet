import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 
angForm: FormGroup;
 
 

  constructor (private formbuilder:FormBuilder, private api:ApiService, private http:HttpClient, private router:Router){
  	this.angForm = this.formbuilder.group({
     name:['',Validators.required],
     email:['',[Validators.required, Validators.minLength(1), Validators.email]],
     password:['',Validators.required],
     })
  }

  ngOnInit(): void {
      
  }
  postdata(angForm:any){
	this.api.userregistration(angForm.value.name,angForm.value.email,angForm.value.password)
	.pipe(first())
	.subscribe(
		data => {
 			 this.router.navigate(['/']);
		},error=>{
      console.log(Error);
      alert("Pas connecter");
			 
		});
}

get email() {return this.angForm.get('email');}
get password() {return this.angForm.get('password');}





  /*signup(){
    this.http.post<any>("http://localhost/api/index.php",this.signupform.value).subscribe(res=>{
      alert("C'est Bon");
      this.signupform.reset();
      this.router.navigate(["login"]);
    }, err =>{
      alert("ERREUR");
    })
  }*/

}
