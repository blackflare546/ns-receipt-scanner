import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { ReceiptComponent } from "./receipt.component";
import { AddReceiptComponent } from "./add-receipt/add-receipt.component";

const routes: Routes = [
  {
    path: "receipt",
    component: ReceiptComponent,
  },
  {
    path: "receipt/add-receipt",
    component: AddReceiptComponent,
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class ReceiptRoutingModule {}
