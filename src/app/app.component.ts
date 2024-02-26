import { Component, OnInit } from "@angular/core";

import { BaseAppComponent } from "./core/models/components/app/base-app.component";
import { CameraService } from "./shared/services";
import { Router } from "@angular/router";

@Component({
  selector: "ns-app",
  templateUrl: "app.component.html",
})
export class AppComponent extends BaseAppComponent implements OnInit {
  constructor(private _cameraService: CameraService, private router: Router) {
    super();
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  async takePhoto() {
    try {
      const image = await this._cameraService.capturePhoto();

      console.log("Photo captured:", image);
      this.navigateToReceipts();
    } catch (error) {
      console.error("Error capturing photo:", error);
    }
  }
  navigateToReceipts() {
    console.log("test");
    this.router.navigate(["/home/receipt/add-receipt"]);
  }
}
