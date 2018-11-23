import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistoryTradePage } from '../history-trade/history-trade';
import { TransferMoneyPage } from '../transfer-money/transfer-money';
import { WithdrawMoneyPage } from '../withdraw-money/withdraw-money';
import { IncomePage } from '../income/income';
/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
})
export class WalletPage {
  moneyType:any=[
  {'src':'assets/imgs/w_BTC.png','name':'BTC','num':'0.000000'},
  {'src':'assets/imgs/w_XRP.png','name':'XRP','num':'0.000000'},
  {'src':'assets/imgs/w_NEO.png','name':'NEO','num':'0.000000'},
  {'src':'assets/imgs/w_LTC.png','name':'LTC','num':'0.000000'},
  {'src':'assets/imgs/w_EOS.png','name':'EOS','num':'0.000000'},
  {'src':'assets/imgs/w_ADA.png','name':'ADA','num':'0.000000'}
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalletPage');
  }
  toPageH(nav){
  	if(nav == 'HistoryTradePage'){
  		this.navCtrl.push(HistoryTradePage);
  	}else if(nav == 'TransferMoneyPage'){
  		this.navCtrl.push(TransferMoneyPage);
  	}else if(nav == 'WithdrawMoneyPage'){
  		this.navCtrl.push(WithdrawMoneyPage);
  	}else if(nav == 'IncomePage'){
  		this.navCtrl.push(IncomePage);
  	}else{
  	
  	}
  	
  }

}
