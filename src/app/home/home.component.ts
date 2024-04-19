 
import { Component, OnInit } from '@angular/core';
import { Ent } from '../ENT';
import { ENT } from '../mock-ENT';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	  entList: Ent[] = ENT;

	  ngOnInit(): void {
    
  }

}
