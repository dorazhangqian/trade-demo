import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TransferMoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transfer-money',
  templateUrl: 'transfer-money.html',
})
export class TransferMoneyPage {
  showtype:boolean=false;
  type:string='请选择币种';
  uId:string='';
  uNum:number=0;
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
  chooseType(item:string){
    this.type=item;
  }

}
