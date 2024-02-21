import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {
  NativeScriptRouterModule,
  NSEmptyOutletComponent,
} from "@nativescript/angular";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },

  {
    path: "home",
    component: NSEmptyOutletComponent,
    loadChildren: () =>
      import("~/app/modules/receipts").then((m) => m.ReceiptsModule),
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
    path: "reports",
    component: NSEmptyOutletComponent,
    loadChildren: () =>
      import("~/app/modules/report").then((m) => m.ReportModule),
    outlet: "reportsTab",
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
