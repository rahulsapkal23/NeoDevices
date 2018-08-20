import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormControl, FormGroup, Validators} from '@angular/forms';
// import { Storage } from '@ionic/storage';
import { RegisterPage } from '../register/register';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  

  user: FormGroup;
  constructor(
    // public storage: Storage,
    public navCtrl : NavController) {}
  ngOnInit() {

      this.user = new FormGroup({
          username: new FormControl('', [Validators.required, Validators.minLength(4)]),
          password: new FormControl('', [Validators.required, Validators.minLength(7)])
      });

  }
 

  onSubmit(): void {
      console.log("on click submit method");
      // this.storage.set('LoginFlag', true);

      // Or to get a key/value pair
     
      // this.navCtrl.setRoot(LoginPage);
      // this.navCtrl.push(HomePage);

  }

  register() {
    console.log("on click register method");
    
    this.navCtrl.push(RegisterPage);
  }

}
