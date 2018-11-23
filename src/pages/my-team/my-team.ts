import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-team',
  templateUrl: 'my-team.html',
})
export class MyTeamPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTeamPage');
  }
  items:any=[];

  initializeItems() {
    this.items = [
    {'src':'assets/imgs/head.png','name':'史努比','phone':'14637483833'},
    {'src':'assets/imgs/head2.png','name':'0fdsf','phone':'14637483833'},
    {'src':'assets/imgs/head.png','name':'0fdsf','phone':'14637483833'},
    {'src':'assets/imgs/head2.png','name':'0fdsf','phone':'14637483833'}
    ];
  }
  onInput(ev: any){
  	console.log(ev.target.value);
  }

}
