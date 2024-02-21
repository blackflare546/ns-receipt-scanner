import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceiptListComponent } from './receipt-list/receipt-list.component';
import { ReceiptsComponent } from './receipts.component';



@NgModule({
  declarations: [
    ReceiptListComponent,
    ReceiptsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReceiptsModule { }
