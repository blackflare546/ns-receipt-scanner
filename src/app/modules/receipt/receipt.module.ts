import { FormatDatePipe } from "./../../shared/pipes/date-format.pipe";
import { NO_ERRORS_SCHEMA, NgModule } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { NativeScriptMaterialCardViewModule } from "@nativescript-community/ui-material-cardview/angular";

import { ReceiptComponent } from "./receipt.component";
import { ReceiptRoutingModule } from "./receipt-routing.module";

@NgModule({
  declarations: [ReceiptComponent, FormatDatePipe],
  imports: [
    NativeScriptCommonModule,
    ReceiptRoutingModule,
    NativeScriptMaterialCardViewModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ReceiptModule {}
