import { Injectable,Output,EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  { Users } from './users';
import  { map } from 'rxjs/operators';
import { Observable } from 'rxjs'
import { Services } from './services';
 import { Demande } from './demande';

@Injectable({
  providedIn: 'root' 
})
export class ApiService {
	redirectUrl!: string;
	baseUrl: string = "http://localhost/api/";
	@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor( private httpClient:HttpClient) { }
////////////////////////****AFFICHAGE****////////////////////////////////////////////
   
   getUsers(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl +'/user.php');
  }

     getCommandes(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl +'/infoscom.php');
  }


     insererDemande(demande: Demande) {
    return this.httpClient.post<any>('http://localhost/api/', demande);
  }

  /////////////////////***************************///////////////////////////////////


  public userlogin(email:any, password:any){
  	alert(email)
  	return this.httpClient.post<any>(this.baseUrl + 'login.php', { email, password})
  	.pipe(map(Users => {
  		this.setToken(Users.email);
  		this.getLoggedInName.emit(true);
  		return Users;
  	}));

  }

 ///////////////////////********************************////////////////////////////////

  public userregistration(name:any,email:any,password:any){
  	return this.httpClient.post<any>(this.baseUrl + 'registre.php', {name,email,password})
  	.pipe(map(Users => {
  		return Users;
  	}));
  }


 public services(email_demandeur:any,  numéro_demandeur:any, enveloppe:any, type_service:any, lieu_service:any, objet_service:any ){
  	return this.httpClient.post<any>(this.baseUrl + 'aide.php', {email_demandeur,numéro_demandeur,enveloppe,type_service,lieu_service,objet_service})
  	.pipe(map(Services => {
  		return Services;
  	}));
  }

 




  setToken(token: string){
  	localStorage.setItem('token',token);
  }
  getToken(){
  	return localStorage.getItem('token');
  }

  deleteToken(){
  	localStorage.removeItem('token');

  }
  isLoggedIn(){
  	const usertoken = this.getToken();
  	if (usertoken != null) {
  		return true;
  		// code...
  	}
  	return false;
  }
}
