import { AddReceiptModule } from "./modules/receipt/add-receipt/add-receipt.module";
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {
  NativeScriptRouterModule,
  NSEmptyOutletComponent,
} from "@nativescript/angular";
import { AddReceiptComponent } from "./modules/receipt/add-receipt/add-receipt.component";

const routes: Routes = [
  {
    path: "",
    redirectTo:
      "/(homeTab:home/default//cameraTab:camera/default//reportTab:report/default)",
    pathMatch: "full",
  },
  {
    path: "home",
    component: NSEmptyOutletComponent,
    loadChildren: () =>
      import("~/app/modules/receipt").then((m) => m.ReceiptModule),
    outlet: "homeTab",
  },
  {
    path: "camera",
    component: NSEmptyOutletComponent,
    loadChildren: () =>
      import("~/app/modules/camera").then((m) => m.CameraModule),
    outlet: "cameraTab",
  },
  {
    path: "report",
    component: NSEmptyOutletComponent,
    loadChildren: () =>
      import("~/app/modules/report").then((m) => m.ReportModule),
    outlet: "reportTab",
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
