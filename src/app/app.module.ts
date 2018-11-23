import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { WalletPage } from '../pages/wallet/wallet';
import { TeamPage } from '../pages/team/team';
import { TeamListPage } from '../pages/team/team-list/team-list';
import { NewUserPage } from '../pages/team/new-user/new-user';
import { MyTeamPage } from '../pages/my-team/my-team';
import { MePage } from '../pages/me/me';
import { NewsPage } from '../pages/news/news';
import { InvestmentPage } from '../pages/investment/investment';
import { HistoryTradePage } from '../pages/history-trade/history-trade';
import { TransferMoneyPage } from '../pages/transfer-money/transfer-money';
import { WithdrawMoneyPage } from '../pages/withdraw-money/withdraw-money';
import { WithdrawOkPage } from '../pages/withdraw-money/withdraw-ok/withdraw-ok';
import { WithdrawDetailPage } from '../pages/withdraw-money/withdraw-detail/withdraw-detail';
import { IncomePage } from '../pages/income/income';
import { RecommendPage } from '../pages/recommend/recommend';
import { ProblemDetailPage } from '../pages/problem/problem-detail/problem-detail';
import { ProblemPage } from '../pages/problem/problem';
import { PasswordLoginPage } from '../pages/password/password-login/password-login';
import { PasswordTradePage } from '../pages/password/password-trade/password-trade';
import { PasswordPage } from '../pages/password/password';
import { OpinionPage } from '../pages/opinion/opinion';
import { MyInfoPage } from '../pages/my-info/my-info';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WalletPage,
    TeamPage,
    MePage,
    NewsPage,
    InvestmentPage,
    MyTeamPage,
    HistoryTradePage,
    TransferMoneyPage,
    WithdrawMoneyPage,
    IncomePage,
    WithdrawOkPage,
    WithdrawDetailPage,
    TeamListPage,
    NewUserPage,
    RecommendPage,
    ProblemDetailPage,
    ProblemPage,
    PasswordTradePage,
    PasswordLoginPage,
    PasswordPage,
    OpinionPage,
    MyInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      iconMode: 'ios',
      mode: 'ios',  //平台样式
      backButtonText: '',//按钮内容
      // backButtonIcon: 'myback',//按钮图标样式
      tabsHideOnSubPages: 'true', //隐藏全部子页面tabs
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WalletPage,
    TeamPage,
    MePage,
    NewsPage,
    InvestmentPage,
    MyTeamPage,
    HistoryTradePage,
    TransferMoneyPage,
    WithdrawMoneyPage,
    IncomePage,
    WithdrawOkPage,
    WithdrawDetailPage,
    TeamListPage,
    NewUserPage,
    RecommendPage,
    ProblemDetailPage,
    ProblemPage,
    PasswordTradePage,
    PasswordLoginPage,
    PasswordPage,
    OpinionPage,
    MyInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
