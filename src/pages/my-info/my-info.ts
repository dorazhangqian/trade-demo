import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the MyInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-info',
  templateUrl: 'my-info.html',
})
export class MyInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyInfoPage');
  }
  takePhoto(){
  	const actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: '拍照',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: '我的相册',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
