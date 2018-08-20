import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  register_user: FormGroup;
  constructor(public navCtrl: NavController) {
    
    
}
  ngOnInit() {

  this.register_user = new FormGroup({
  fname: new FormControl('', [Validators.required, Validators.minLength(4)]),
  lname: new FormControl('', [Validators.required, Validators.minLength(4)]),
  name: new FormControl('', [Validators.required, Validators.minLength(4)]),
  email: new FormControl('', [Validators.required,Validators.email]),
  mob: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)])
  });
  
  }


onSubmit(): void {
 console.log("on click submit method");
//  this.navCtrl.setRoot(HomePage);
 
//  this.datePicker.show({
//   date: new Date(),
//   mode: 'date',
//   androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
// }).then(
//   date => console.log('Got date: ', date),
//   err => console.log('Error occurred while getting date: ', err)
// );
}
  

}
