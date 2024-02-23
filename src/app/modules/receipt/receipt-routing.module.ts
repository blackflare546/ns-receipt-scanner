import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { ReceiptComponent } from "./receipt.component";

const routes: Routes = [
  {
    path: "default",
    component: ReceiptComponent,
  },
  {
    path: "add-receipt",
    loadChildren: () => import("./add-receipt").then((m) => m.AddReceiptModule),
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class ReceiptRoutingModule {}
