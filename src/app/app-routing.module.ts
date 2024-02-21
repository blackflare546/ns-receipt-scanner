import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {
  NativeScriptRouterModule,
  NSEmptyOutletComponent,
} from "@nativescript/angular";

const routes: Routes = [
  // {
  //   path: "",
  //   redirectTo: "/(homeTab:home/default)",
  //   pathMatch: "full",
  // },
  {
    path: "",
    redirectTo: "/(homeTab:home/default//cameraTab:camera/default)",
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
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
