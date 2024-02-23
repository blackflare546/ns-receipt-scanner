import { NO_ERRORS_SCHEMA, NgModule } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { AddReceiptComponent } from "./add-receipt.component";

@NgModule({
  declarations: [AddReceiptComponent],
  imports: [NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AddReceiptModule {}
