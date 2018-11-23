import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WithdrawOkPage } from './withdraw-ok/withdraw-ok';
/**
 * Generated class for the WithdrawMoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-withdraw-money',
  templateUrl: 'withdraw-money.html',
})
export class WithdrawMoneyPage {

  showtype:boolean=false;
  type:string='请选择币种';
  typesrc:string='';
  uId:string='';
  uNum:number=0;
  wAddr:string='';
  typeList:any=[
  {'src':'assets/imgs/w_BTC.png','name':'BTC'},
  {'src':'assets/imgs/w_NEO.png','name':'NEO'},
  {'src':'assets/imgs/w_ADA.png','name':'ADA'},
  {'src':'assets/imgs/w_LTC.png','name':'LTC'},
  {'src':'assets/imgs/w_XRP.png','name':'XRP'}
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferMoneyPage');
  }
  showCoinType(ev:any){
  	ev.stopPropagation();
  	this.showtype=true;
  }
  closeType(ev:any){
  	ev.stopPropagation();
  	this.showtype=false;
  }
  chooseType(item:any){
    this.type=item.name;
    this.typesrc=item.src;
  }
  toPage(){
  	this.navCtrl.push(WithdrawOkPage);
  }


}
