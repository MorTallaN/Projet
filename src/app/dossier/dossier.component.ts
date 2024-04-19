import { Component, Input, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: ['./dossier.component.css']
})
export class DossierComponent implements OnInit {
  http: any;
  
	@Input()
 
  ngOnInit(): void {
      
  }
   
  uploadFile(event:any){
    let elem = event.target;
    if (elem.files.length > 0){
      let formData:any;
      formData = new formData;
      formData.append('file', elem.files[0]);

      this.http.post('http://localhost/api/dossier.php', formData)

      .subscribe((data: { json: () => any; }) =>{

        let jsonResponse = data.json();

      })
    }
    }
}
 

