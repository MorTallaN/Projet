import { Component } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-infoscommande',
  templateUrl: './infoscommande.component.html',
  styleUrls: ['./infoscommande.component.css']
})
export class InfoscommandeComponent {

	 services: any[] = [];
 

  constructor(private api:ApiService ) { }

   

	  ngOnInit() {
    this.api.getCommandes().subscribe(
      data => {
        this.services = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
