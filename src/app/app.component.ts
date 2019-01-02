import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Api Documentation';
  constructor (private httpService: HttpClient) { }
  dataObj:any = {};
  arrBirds: string [];

  ngOnInit () {
    this.httpService.get('./assets/TMaaS_API_postman_collection.json').subscribe(
      data => {
        this.dataObj = data;
        console.log(this.dataObj.item);
        this.arrBirds = this.dataObj.item;
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}