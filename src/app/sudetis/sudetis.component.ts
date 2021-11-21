import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sudetis',
  templateUrl: './sudetis.component.html',
  styleUrls: ['./sudetis.component.css']
})
export class SudetisComponent implements OnInit {
  // skaicius = 20;
  skaicius1: number; // veikia ir be tipo nurodymo
  skaicius2: number;
  suma: number = 0;
  // mygtukas = false;
  skaiciuoti() {
    this.suma = this.skaicius1 + this.skaicius2;
  }

  // suskaiciuok(sk){
  //   return sk*10;
  // }
  // padvigubink(){
  //   this.skaicius = this.skaicius*2;
  // }

  constructor() { 
    // setTimeout(()=>{
    //   this.mygtukas = true;
    // }, 3000)
  }

  ngOnInit(): void {
  }

}
