import { NO_ERRORS_SCHEMA, NgModule } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { ReportComponent } from "./report.component";
import { ReportRoutingModule } from "./report-routing.module";

@NgModule({
  declarations: [ReportComponent],
  imports: [NativeScriptCommonModule, ReportRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ReportModule {}
