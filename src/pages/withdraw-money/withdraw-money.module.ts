import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WithdrawMoneyPage } from './withdraw-money';

@NgModule({
  declarations: [
    WithdrawMoneyPage,
  ],
  imports: [
    IonicPageModule.forChild(WithdrawMoneyPage),
  ],
})
export class WithdrawMoneyPageModule {}
