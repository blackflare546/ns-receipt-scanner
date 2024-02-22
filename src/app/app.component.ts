import { Component, OnInit } from "@angular/core";
import { BaseAppComponent } from "./core/models/components/app/base-app.component";

@Component({
  selector: "ns-app",
  templateUrl: "app.component.html",
})
export class AppComponent extends BaseAppComponent implements OnInit {
  constructor() {
    // Use the component constructor to inject providers.
    super();
  }

  ngOnInit(): void {
    // Init your component properties here.
  }
}
