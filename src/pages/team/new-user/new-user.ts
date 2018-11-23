import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-user',
  templateUrl: 'new-user.html',
})
export class NewUserPage {
  type:string='86';
  showtype:boolean=false;
  phoneSrc:string='assets/imgs/china.png';
  uname:string='';
  zname:string='';
  jname:string='';
  psw:string='';
  email:string='';
  phone:string='';
  addr:string='https://www.icbwallet.com/sign-up?ref=MJUqcvadf';
  typeList:any=[
  {'src':'assets/imgs/china.png','name':'China (中国)','num':'86'},
  {'src':'assets/imgs/UnitedStates.png','name':'United States ','num':'1'},
  {'src':'assets/imgs/Mexico.png','name':'Mexico ','num':'52'},
  {'src':'assets/imgs/Korea.png','name':'South Korea ','num':'82'},
  {'src':'assets/imgs/kingdom.png','name':'United Kingdom ','num':'44'}
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewUserPage');
  }
  showCoinType(){
  	this.showtype=true;
  }
  closeType(ev:any){
  	ev.stopPropagation();
  	this.showtype=false;
  }
  chooseType(item:any){
    this.type=item.num;
    this.phoneSrc=item.src;
  }
}
