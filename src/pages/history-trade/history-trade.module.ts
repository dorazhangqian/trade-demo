import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryTradePage } from './history-trade';

@NgModule({
  declarations: [
    HistoryTradePage,
  ],
  imports: [
    IonicPageModule.forChild(HistoryTradePage),
  ],
})
export class HistoryTradePageModule {}
