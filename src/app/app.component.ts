import { Component, Injector, OnInit } from "@angular/core";

import { CameraService } from "./shared/services";

import { BaseComponent } from "./core/models/components/base-component.model";

@Component({
  selector: "ns-app",
  templateUrl: "app.component.html",
})
export class AppComponent extends BaseComponent implements OnInit {
  constructor(
    private _cameraService: CameraService,
    protected injector: Injector
  ) {
    super(injector);
  }

  ngOnInit(): void {}

  async takePhoto() {
    try {
      const image = await this._cameraService
        .capturePhoto()
        .then(() => this.navigate("/report"));
      console.log("Photo captured:", image);
    } catch (error) {
      console.error("Error capturing photo:", error);
    }
  }
}
