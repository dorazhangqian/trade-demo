import { Component,ViewChild } from '@angular/core';
//import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MePage } from '../me/me';
import { NewsPage } from '../news/news';
import { InvestmentPage } from '../investment/investment';
import { Tabs } from 'ionic-angular';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;
  tab1Root = MePage;
  tab2Root = InvestmentPage;
  tab3Root = NewsPage;
  tab4Root = HomePage;
  
  constructor() {

  }
  ionViewDidEnter() {
  this.tabRef.select(3);
 }
}
