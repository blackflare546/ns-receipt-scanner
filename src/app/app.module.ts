import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";
import { NativeScriptMaterialBottomNavigationModule } from "@nativescript-community/ui-material-bottom-navigation/angular";
import { registerElement } from "@nativescript/angular";
import { FloatingActionButton } from "@nativescript-community/ui-material-floatingactionbutton";
import { NativeScriptMaterialButtonModule } from "@nativescript-community/ui-material-button/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CameraService } from "./shared/services";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptMaterialBottomNavigationModule,
    NativeScriptMaterialButtonModule,
  ],
  providers: [CameraService],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
  constructor() {
    registerElement("MDFloatingActionButton", () => FloatingActionButton);
  }
}
