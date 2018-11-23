import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PasswordLoginPage } from './password-login/password-login';
import { PasswordTradePage } from './password-trade/password-trade';
/**
 * Generated class for the PasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordPage');
  }
  toPagePSW(nav){
  	if(nav == 'PasswordLoginPage'){
  		this.navCtrl.push(PasswordLoginPage)
  	}else if(nav == 'PasswordTradePage'){
  		this.navCtrl.push(PasswordTradePage)
  	}
  }

}
