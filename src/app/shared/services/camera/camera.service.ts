import { Injectable } from "@angular/core";
import { requestPermissions } from "@nativescript/camera";
import * as camera from "@nativescript/camera";
import { Image } from "@nativescript/core";

@Injectable({
  providedIn: "root",
})
export class CameraService {
  capturedImage: Image;

  constructor() {
    //
  }

  capturePhoto(): void {
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
}
