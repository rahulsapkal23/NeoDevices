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


  public status: boolean = false;
  categories = [
    ];         
   
    selectedCategory = this.categories[0]; 
  user: FormGroup;
  constructor(
    // public storage: Storage,
    public navCtrl : NavController) {
      
    }
  ngOnInit() {

      this.user = new FormGroup({
          email: new FormControl('', [Validators.required, Validators.minLength(4)]),
          password: new FormControl('', [Validators.required, Validators.minLength(7)]),
          branch : new FormControl('',[Validators.required]),
          city : new FormControl('',[Validators.required])
          
      });

  }
 

  onSubmit(user): void {
      console.log("on click submit method ",user);
      // this.storage.set('LoginFlag', true);

      // Or to get a key/value pair
     
      // this.navCtrl.setRoot(LoginPage);
      // this.navCtrl.push(HomePage);

  }
  onChangeCity(user){
    console.log("chnage triggered ",user);
    this.status = true;
    switch (user.value.city) {
      case "Mumbai":
      this.categories = [
        {
          title: 'Dadar(Ruby Office)',
          value: 1 
        },
        {
          title: 'Prabhadevi(Bussiness Tower 8Th Floor)',
          value: 2
        },
        {
          title: 'Prabhadevi(Bussiness Tower 9Th Floor)',
          value: 3
        },
        {
          title: 'Prabhadevi(Bussiness Tower 10Th Floor)',
          value: 4
        },
        {
          title: 'Prabhadevi(Unique Office)',
          value: 5
        }];
        break;
    
        case "NaviMumbai":
        this.categories = [
          {
            title: 'Rabale(Sigma IT Park 5th floor)',
            value: 1 
          },
          {
            title: 'Rabale(Sigma IT Park 9th floor)',
            value: 2
          },
          ];
          break;

          case "Pune":
          this.categories = [
            {
              title: 'Pune(Ruby Office)',
              value: 1 
            },
           ];
            break;
      default:
        break;

        
    }
    
  }
  register() {
    console.log("on click register method");
    
    this.navCtrl.push(RegisterPage);
  }

}
