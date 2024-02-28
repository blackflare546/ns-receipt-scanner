import { Component, Injector, OnInit } from "@angular/core";

import { CameraService } from "./shared/services";

import { BaseComponent } from "./core/models/components/base-component.model";
import { RouterExtensions } from "@nativescript/angular";

@Component({
  selector: "ns-app",
  templateUrl: "app.component.html",
})
export class AppComponent extends BaseComponent implements OnInit {
  constructor(
    private _cameraService: CameraService,
    protected injector: Injector,
    private router: RouterExtensions
  ) {
    super(injector);
  }

  ngOnInit(): void {}

  navigateToReport() {
       this.router.navigate(
         [{ outlets: { reportTab: ["report"] } }]
       );
  }

  async takePhoto() {
    try {
      const image = await this._cameraService.capturePhoto();
      this.navigateToReport();
      
      console.log("Photo captured:", image);
    } catch (error) {
      console.error("Error capturing photo:", error);
    }
  }
}
