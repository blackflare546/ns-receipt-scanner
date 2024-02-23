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
  capturedImage: Image; // Add this property to store the captured image

  constructor() {
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
          this.capturedImage = new Image();
          this.capturedImage.src = imageAsset;
        })
        .catch((err) => {
          console.log("Error -> " + err.message);
        });
    });
    console.log("CAMERA");
  }

  useCapturedImage() {
    if (this.capturedImage) {
      console.log(this.capturedImage.src);
    } else {
      console.log("No image captured yet");
    }
  }
}
