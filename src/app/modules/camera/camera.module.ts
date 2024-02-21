import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraDetailsComponent } from './camera-details/camera-details.component';
import { ReceiptListComponent } from './receipts/receipt-list/receipt-list.component';
import { CameraComponent } from './camera.component';



@NgModule({
  declarations: [
    CameraDetailsComponent,
    ReceiptListComponent,
    CameraComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CameraModule { }
