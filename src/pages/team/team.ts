import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyTeamPage } from '../my-team/my-team';
import { TeamListPage } from './team-list/team-list';
import { NewUserPage } from './new-user/new-user';
/**
 * Generated class for the TeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
})
export class TeamPage {
  items:any=[
  {'src':'assets/imgs/t_myTeam.png','name':'我的团队','toPage':'MyTeamPage'},
  {'src':'assets/imgs/t_newUser.png','name':'推荐新用户','toPage':'NewUserPage'},
  {'src':'assets/imgs/t_teamList.png','name':'直推列表','toPage':'TeamListPage'}
  ];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamPage');
  }
  toPageT(nav){
  	if(nav == 'MyTeamPage'){
  		this.navCtrl.push(MyTeamPage);
  	}else if(nav == 'TeamListPage'){
  		this.navCtrl.push(TeamListPage);
  	}
  	else if(nav == 'NewUserPage'){
  		this.navCtrl.push(NewUserPage);
  	}
  }

}
