import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WalletPage } from '../wallet/wallet';
import { TeamPage } from '../team/team';
import { RecommendPage } from '../recommend/recommend';
import { ProblemPage } from '../problem/problem';
import { PasswordPage } from '../password/password';
import { OpinionPage } from '../opinion/opinion';
import { MyInfoPage } from '../my-info/my-info';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	grids:any=[
	{
		'src':'assets/imgs/h_wallet.png',
		'name':'我的钱包',
		'toPage':'WalletPage'
	},
	{
		'src':'assets/imgs/h_team.png',
		'name':'我的团队',
		'toPage':'TeamPage'
	},
	{
		'src':'assets/imgs/h_recommend.png',
		'name':'我的推荐码',
		'toPage':'RecommendPage'
	},
	{
		'src':'assets/imgs/h_opinion.png',
		'name':'意见反馈',
		'toPage':'OpinionPage'
	},
	{
		'src':'assets/imgs/h_problem.png',
		'name':'常见问题',
		'toPage':'ProblemPage'
	},
	{
		'src':'assets/imgs/h_setting.png',
		'name':'设置',
		'toPage':'PasswordPage'
	}
	];

  constructor(public navCtrl: NavController) {
  }
	toPageN(nav){
		if(nav == 'WalletPage'){
			this.navCtrl.push(WalletPage);
		}else if(nav == 'TeamPage'){
			this.navCtrl.push(TeamPage);
		}else if(nav == 'RecommendPage'){
			this.navCtrl.push(RecommendPage);
		}else if(nav == 'ProblemPage'){
			this.navCtrl.push(ProblemPage);
		}else if(nav == 'PasswordPage'){
			this.navCtrl.push(PasswordPage);
		}else if(nav == 'OpinionPage'){
			this.navCtrl.push(OpinionPage);
		}else if(nav == 'MyInfoPage'){
			this.navCtrl.push(MyInfoPage);
		}
		
		
	}
}
