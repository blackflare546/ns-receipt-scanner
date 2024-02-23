import { Component, OnInit } from "@angular/core";

import { BaseAppComponent } from "./core/models/components/app/base-app.component";
import { CameraService } from "./shared/services";

@Component({
  selector: "ns-app",
  templateUrl: "app.component.html",
})
export class AppComponent extends BaseAppComponent implements OnInit {
  constructor(private _cameraService: CameraService) {
    super();
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  takePhoto() {
    this._cameraService.capturePhoto();
  }

  useCapturedImage() {
    this._cameraService.getSavedImages();
  }
}
