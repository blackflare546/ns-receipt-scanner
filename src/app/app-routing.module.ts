import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {
  NativeScriptRouterModule,
  NSEmptyOutletComponent,
} from "@nativescript/angular";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/(cameraTab:camera/default)",
    pathMatch: "full",
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
