import { Injectable } from "@angular/core";
import { requestPermissions } from "@nativescript/camera";
import * as camera from "@nativescript/camera";
import { Image } from "@nativescript/core";
import { ImageSource, knownFolders, path } from "@nativescript/core";

@Injectable({
  providedIn: "root",
})
export class CameraService {
  capturedImage: Image;

  constructor() {
    //
  }

  capturePhoto(): void {
    const options = {
      width: 300,
      height: 300,
      keepAspectRatio: false,
      saveToGallery: true,
    };

    requestPermissions().then(() => {
      camera
        .takePicture(options)
        .then((imageAsset) => {
          console.log(
            "Size: " +
              imageAsset.options.width +
              "x" +
              imageAsset.options.height
          );
          console.log("keepAspectRatio: " + imageAsset.options.keepAspectRatio);
          console.log(
            "Photo saved in Photos/Gallery for Android or in Camera Roll for iOS"
          );

          ImageSource.fromAsset(imageAsset).then((imageSource: ImageSource) => {
            const folderPath: string = knownFolders.documents().path;
            const fileName: string = "test.jpg";
            const filePath: string = path.join(folderPath, fileName);
            const saved: boolean = imageSource.saveToFile(filePath, "jpg");

            if (saved) {
              console.log("Saved: " + filePath);
              console.log("Image saved successfully!");
            }
          });
        })
        .catch((err) => {
          console.log("Error -> " + err.message);
        });
    });
  }

  getCapturedImage() {
    console.log("GetCapturedImage");
  }
}
