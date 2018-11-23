import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TeamListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team-list',
  templateUrl: 'team-list.html',
})
export class TeamListPage {
  itemsc:any=[
  {'date':'2018/10/10','time':'14:00','name':'李四','phone':'12343333330','state':'无'},
  {'date':'2018/10/10','time':'14:00','name':'李四','phone':'12343333330','state':'无'},
  {'date':'2018/10/10','time':'14:00','name':'李四','phone':'12343333330','state':'无'},
  {'date':'2018/10/10','time':'14:00','name':'李四','phone':'12343333330','state':'无'},
  {'date':'2018/10/10','time':'14:00','name':'李四','phone':'12343333330','state':'无'}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamListPage');
  }

}
