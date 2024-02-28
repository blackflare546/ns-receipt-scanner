
import { NO_ERRORS_SCHEMA, NgModule } from "@angular/core";
import {
  NativeScriptCommonModule,
  NativeScriptFormsModule,
} from "@nativescript/angular";
import { NativeScriptDateTimePickerModule } from "@nativescript/datetimepicker/angular";
import { AddReceiptComponent } from "./add-receipt.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DropDownModule } from "nativescript-drop-down/angular";
@NgModule({
  declarations: [AddReceiptComponent],
  imports: [
    NativeScriptCommonModule,
    NativeScriptDateTimePickerModule,
    NativeScriptFormsModule,
    ReactiveFormsModule,
    DropDownModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AddReceiptModule {}
