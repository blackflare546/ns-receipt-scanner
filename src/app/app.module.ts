import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { ReportsDetailsComponent } from './modules/report/reports-details/reports-details.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [AppComponent, ReportsDetailsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
