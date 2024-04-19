import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-affuser',
  templateUrl: './affuser.component.html',
  styleUrls: ['./affuser.component.css']
})
export class AffuserComponent {

 users: any[] = [];
 

  constructor(private api:ApiService ) { }

   

	  ngOnInit() {
    this.api.getUsers().subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.log(error);
      }
    );
  }


}
