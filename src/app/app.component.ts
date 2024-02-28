import { Component, Injector, OnInit } from "@angular/core";

import { CameraService } from "./shared/services";
import { Router } from "@angular/router";

import { BaseComponent } from "./core/models/components/base-component.model";
import { RouterExtensions } from "@nativescript/angular";

@Component({
  selector: "ns-app",
  templateUrl: "app.component.html",
})
<<<<<<< HEAD
export class AppComponent extends BaseComponent implements OnInit {
  constructor(
    private _cameraService: CameraService,
    protected injector: Injector,
    private router: RouterExtensions
  ) {
    super(injector);
=======
export class AppComponent extends BaseAppComponent implements OnInit {
  constructor(private _cameraService: CameraService, private router: Router) {
    super();
>>>>>>> c97bdfbed56fe4a984ce53d0e2184dd67fe57eb0
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
