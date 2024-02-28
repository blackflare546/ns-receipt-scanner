import { AddReceiptModule } from "./modules/receipt/add-receipt/add-receipt.module";
import { NgModule } from "@angular/core";
import { PreloadAllModules, Routes } from "@angular/router";
import {
  NativeScriptRouterModule,
  NSEmptyOutletComponent,
} from "@nativescript/angular";

const routes: Routes = [
  {
    path: "",
    redirectTo:
      "/(homeTab:home/receipt//cameraTab:camera/default//reportTab:report/default)",
    pathMatch: "full",
  },
  {
    path: "home",
    component: NSEmptyOutletComponent,
    loadChildren: () =>
      import("./modules/receipt").then((m) => m.ReceiptModule),
    outlet: "homeTab",
  },
  {
    path: "camera",
    component: NSEmptyOutletComponent,
    loadChildren: () => import("./modules/camera").then((m) => m.CameraModule),
    outlet: "cameraTab",
  },
  {
    path: "report",
    component: NSEmptyOutletComponent,
    loadChildren: () => import("./modules/report").then((m) => m.ReportModule),
    outlet: "reportTab",
  },
];

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
