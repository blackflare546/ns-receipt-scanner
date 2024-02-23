import { Component, OnInit } from "@angular/core";
import { requestPermissions } from "@nativescript/camera";
import * as camera from "@nativescript/camera";
import { Image } from "@nativescript/core";

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

  takePhoto() {
    requestPermissions().then(() => {
      camera
        .takePicture()
        .then((imageAsset) => {
          console.log("Result is an image asset instance");
          var image = new Image();
          image.src = imageAsset;
        })
        .catch((err) => {
          console.log("Error -> " + err.message);
        });
    });
    console.log("CAMERA");
  }
}
