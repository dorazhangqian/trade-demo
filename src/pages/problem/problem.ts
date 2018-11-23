import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProblemDetailPage } from './problem-detail/problem-detail';

/**
 * Generated class for the ProblemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-problem',
  templateUrl: 'problem.html',
})
export class ProblemPage {
  type:string='problem';
  items:any=[
  {'name':'进入委托具备什么条件？','toPage':'ProblemDetailPage'},
  {'name':'进入委托具备什么条件？','toPage':'ProblemDetailPage'},
  {'name':'进入委托具备什么条件？','toPage':'ProblemDetailPage'},
  {'name':'进入委托具备什么条件？','toPage':'ProblemDetailPage'},
  {'name':'进入委托具备什么条件？','toPage':'ProblemDetailPage'}
  ];
  itemsBC:any=[
  {'name':'知识这是知识','toPage':'ProblemDetailPage'},
  {'name':'知识这是知识','toPage':'ProblemDetailPage'},
  {'name':'知识这是知识','toPage':'ProblemDetailPage'},
  {'name':'知识这是知识','toPage':'ProblemDetailPage'},
  {'name':'知识这是知识','toPage':'ProblemDetailPage'}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProblemPage');
  }
  segmentChanged(ev:any){
  	console.log(ev.value)
  }
  toPageT(nav){
//	if(nav == 'ProblemDetailPage'){
  		this.navCtrl.push(ProblemDetailPage,{
  			type:this.type
  		});
//	}else if(nav == 'TeamListPage'){
//		this.navCtrl.push(TeamListPage);
//	}
//	else if(nav == 'NewUserPage'){
//		this.navCtrl.push(NewUserPage);
//	}
  }
}
