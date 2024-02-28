import { Injectable, Injector } from "@angular/core";
import { ImageSource } from "@nativescript/core";
import { requestPermissions } from "@nativescript/camera";
import * as camera from "@nativescript/camera";
import { RouterExtensions } from "@nativescript/angular";

@Injectable({
  providedIn: "root",
})
export class CameraService {
  capturedImage: ImageSource;

  constructor(private _routerExtensions: RouterExtensions) {}

  capturePhoto(): Promise<Boolean> {
    const options = {
      width: 300,
      height: 300,
      keepAspectRatio: false,
      saveToGallery: true,
    };

    return new Promise((resolve, reject) => {
      requestPermissions().then(() => {
        camera
          .takePicture(options)
          .then((imageAsset) => {
            console.log("Image captured");
            resolve(true);
          })
          .catch((err) => {
            console.log("Error -> " + err.message);
            reject(err);
          });
      });
    });
  }

 
}
