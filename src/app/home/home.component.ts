import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   error: string = '';
   //toggle classes
   hide: string = 'disappear';
   
   toggle(): void {
     if(this.hide === 'disappear'){
       this.hide = 'apear';
     }else{
       this.hide = 'disappear';
     }
   }
  //end toggle class

 

  
  constructor() { }

  ngOnInit() {
  }

  //login System Function 

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    console.log(username+" "+password);
    
   if(username == 'admin' && password == '12345') {
     window.location.href = "/booking-system";

   }else {
     this.error = "Username/Password is Incorrect";
   }
    
  }

  success:string = '';
  error2: string = '';
  ContactUs(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.querySelector('#name').value;
    const email = target.querySelector('#email').value;
    const message = target.querySelector('#message').value;
    
    
   if(name != '' && email != '' && message != '') {
     
    this.success = "Message Sent";

   }else {
     this.error2 = "Fields are required";
   }
    
  }

}
