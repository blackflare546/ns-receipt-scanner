import { NO_ERRORS_SCHEMA, NgModule } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { NativeScriptDateTimePickerModule } from "@nativescript/datetimepicker/angular";

import { AddReceiptComponent } from "./add-receipt.component";

@NgModule({
  declarations: [AddReceiptComponent],
  imports: [NativeScriptCommonModule, NativeScriptDateTimePickerModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AddReceiptModule {}
