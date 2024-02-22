import { NO_ERRORS_SCHEMA, NgModule } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { ReceiptComponent } from "./receipt.component";
import { ReceiptRoutingModule } from "./receipt-routing.module";

@NgModule({
  declarations: [ReceiptComponent],
  imports: [NativeScriptCommonModule, ReceiptRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ReceiptModule {}
