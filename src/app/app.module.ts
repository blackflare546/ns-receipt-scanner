import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";
import { NativeScriptMaterialCardViewModule } from "@nativescript-community/ui-material-cardview/angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptMaterialBottomNavigationModule } from "@nativescript-community/ui-material-bottom-navigation/angular";
import { registerElement } from "@nativescript/angular";
import { FloatingActionButton } from "@nativescript-community/ui-material-floatingactionbutton";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptMaterialCardViewModule,
    NativeScriptMaterialBottomNavigationModule,
  ],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
  constructor() {
    registerElement("MDFloatingActionButton", () => FloatingActionButton);
  }
}
