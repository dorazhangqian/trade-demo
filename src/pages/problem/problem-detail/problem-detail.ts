import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProblemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-problem-detail',
  templateUrl: 'problem-detail.html',
})
export class ProblemDetailPage {
  myTitle:string='';
  myContent:any;
  type:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.type=this.navParams.get('type');
  	if(this.type== 'problem'){
  		this.myTitle='进入委托具备什么条件？';
  		this.myContent='进入委托具备什么条件进入委托具备什么条件进入委托具备什么条件进入委托具备什么条件进入委托具备什么条件进入委托具备什么条件';
  	}else{
  		this.myTitle='知识这是知识';
  		this.myContent='知识这是知识知识这是知识知识这是知识知识这是知识知识这是知识知识这是知识知识这是知识知识这是知识知识这是知识知识这是知识';
  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProblemDetailPage');
  }

}
