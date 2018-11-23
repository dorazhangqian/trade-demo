import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HistoryTradePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history-trade',
  templateUrl: 'history-trade.html',
})
export class HistoryTradePage {
  myDate:boolean=true;
  showMydata:boolean=false;
  type:string='capital';
  historyT:any=[
  {'type':'转账','state':'1','date':'2018.10.10','money':'-100'},
  {'type':'提币','state':'2','date':'2018.10.10','money':'100'},
  {'type':'充值','state':'3','date':'2018.10.10','money':'100'},
  {'type':'终端协议','state':'3','date':'2018.10.10','money':'100'}
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.historyT);
  }
  
  
  showDate(ev:any){
  	ev.stopPropagation();
  	this.showMydata=true;
  }
  closeType(ev:any){
  	ev.stopPropagation();
  	this.showMydata=false;
  }
  ionViewWillLeave( ){
  	this.myDate=false;
  }
  segmentChanged(ev:any){
  	
  }
}
