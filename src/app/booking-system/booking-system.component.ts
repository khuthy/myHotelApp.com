import { Component, OnInit } from '@angular/core';
import { Rooms } from './rooms';
import { ROOMS } from  './mock-rooms';

import { Book} from './book';
import { BOOK } from './mock-book';

import { from } from 'rxjs';

@Component({
  selector: 'app-booking-system',
  templateUrl: './booking-system.component.html',
  styleUrls: ['./booking-system.component.scss']
  
})
export class BookingSystemComponent implements OnInit {

  
  constructor() { 
   
  }

  ngOnInit() {
  }

  roomClass: string = 'appear';
  reserveClass: string = 'disappear';
  payClass: string = 'disappear';

  //active
  active: string = '';
  count: number = 0;

 room() {
    this.roomClass = 'appear';
    this.reserveClass = 'disappear';
    this.payClass = 'disappear';
    
 }

 reserve(){
  this.roomClass = 'disappear';
  this.reserveClass = 'appear';
  this.payClass = 'disappear';
 
 }

 pay(){
  this.roomClass = 'disappear';
  this.reserveClass = 'disappear';
  this.payClass = 'appear';
  
 }
  
  rooms = ROOMS;
  books = BOOK;
  booked: string = '';
  model: any = {}; 
  model2: any = {};
  model3: any = {};
  addRoom(){
   
    if(this.model) {
      if(this.rooms.push(this.model)){
        this.model = {};
        
      } 
    }

}


bookNow(event, i){
  event.preventDefault();
 
  const target = event.target;
  const days = target.querySelector('#days').value;
  const guest = target.querySelector('#guest').value;
  
  this.model2.price = this.rooms[i].price;
  this.model2.roomtype = this.rooms[i].roomtype;
  
  var total = this.model2.price * days * guest;
  var roomtype = this.model2.roomtype;
  
  this.books.push({id: i,days: days, guest: guest, total: total, roomtype: roomtype});
    
  
}

deletePay(i) {
  this.books.splice(i, 1);
}
payment(i){
  this.deletePay(i);
  this.pay();
}
paying(event) {
  event.preventDefault();
  const target = event.target;
  const name = target.querySelector('#username').value;
  if(name == ''){
      alert('please enter card details');
  }else{
    alert('Thank You '+name+ '!!! . You have Completely Payed for your Room at Raddison Blu. you will receive a message shortly');
    target.reset[0];
  }

}

deleteRoom(i) {
  this.rooms.splice(i, 1);
}
}
