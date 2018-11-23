import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WithdrawDetailPage } from '../withdraw-detail/withdraw-detail';
/**
 * Generated class for the WithdrawOkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-withdraw-ok',
  templateUrl: 'withdraw-ok.html',
})
export class WithdrawOkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WithdrawOkPage');
  }
  toHome(){
  	this.navCtrl.popToRoot();
  }
  toDetail(){
  	this.navCtrl.push(WithdrawDetailPage);
  }

}
