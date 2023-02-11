import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import {  NgForm} from "@angular/forms";


@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  constructor (private http:HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(dataPost:{project:string; material:string}){
console.log(dataPost)
this.http.post('https://pratibha-e05a5-default-rtdb.firebaseio.com/pratibha.json',dataPost).subscribe()
  }
  collectPost(){

  }
  clearPost(){

  }

}
