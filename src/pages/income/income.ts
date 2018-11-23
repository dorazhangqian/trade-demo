import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IncomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-income',
  templateUrl: 'income.html',
})
export class IncomePage {
  type:string='capital';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  itemsc:any=[
  {'date':'2018/10/10','type':'每月分红','currency':'Bitcoin','wallet':'¥500','all':'¥5000'},
  {'date':'2018/10/10','type':'每月分红','currency':'Bitcoin','wallet':'¥500','all':'¥5000'},
  {'date':'2018/10/10','type':'每月分红','currency':'Bitcoin','wallet':'¥500','all':'¥5000'},
  {'date':'2018/10/10','type':'每月分红','currency':'Bitcoin','wallet':'¥500','all':'¥5000'}
  ];
  itemse:any=[];
  ionViewDidLoad() {
    console.log('ionViewDidLoad IncomePage');
  }
  segmentChanged(ev:any){
  	console.log(ev.value)
  }
}
