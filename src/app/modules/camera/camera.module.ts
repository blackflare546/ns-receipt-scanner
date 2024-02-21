import { NO_ERRORS_SCHEMA, NgModule } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { CameraComponent } from "./camera.component";
import { CameraRoutingModule } from "./camera-routing.module";

@NgModule({
  declarations: [CameraComponent],
  imports: [NativeScriptCommonModule, CameraRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CameraModule {}
