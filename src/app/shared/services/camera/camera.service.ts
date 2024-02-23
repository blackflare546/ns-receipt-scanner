import { Injectable } from "@angular/core";
import {
  ImageSource,
  knownFolders,
  path,
  Folder,
  File,
} from "@nativescript/core";
import { requestPermissions } from "@nativescript/camera";
import * as camera from "@nativescript/camera";

import { SavedImage } from "../../interfaces";

@Injectable({
  providedIn: "root",
})
export class CameraService {
  capturedImage: ImageSource;

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
            this.saveImage(imageSource);
          });
        })
        .catch((err) => {
          console.log("Error -> " + err.message);
        });
    });
  }

  private saveImage(imageSource: ImageSource): void {
    const folderPath: string = path.join(
      knownFolders.documents().path,
      "Scanned-Receipts"
    );
    const dateTime = new Date().toISOString().replace(/[:\-T\.]/g, ""); // Format: YYYYMMDDHHmmss
    const fileName: string = "scan_" + dateTime + ".jpg";
    const filePath: string = path.join(folderPath, fileName);

    // Check if the folder exists, if not, create it
    const folder = knownFolders.documents().getFolder("Scanned-Receipts");

    const saved: boolean = imageSource.saveToFile(filePath, "jpg");

    if (saved) {
      console.log("Saved: " + filePath);
      console.log("Image saved successfully!");

      // After saving the image, add its metadata to JSON
      this.addToJSON(filePath, fileName, dateTime);
    }
  }

  private addToJSON(
    filePath: string,
    fileName: string,
    dateTime: string
  ): void {
    const jsonData = this.retrieveJSON();
    const entry: SavedImage = { filePath, fileName, dateTime };
    jsonData.push(entry);

    const jsonString = JSON.stringify(jsonData);
    const jsonFilePath = path.join(
      knownFolders.documents().path,
      "Scanned-Receipts",
      "images.json"
    );

    const file: File = knownFolders
      .documents()
      .getFile("Scanned-Receipts/images.json");
    file
      .writeText(jsonString)
      .then(() => {
        console.log("JSON file updated with new entry.");
      })
      .catch((err) => {
        console.log("Error writing JSON file: " + err);
      });
  }

  private retrieveJSON(): SavedImage[] {
    const jsonFilePath = path.join(
      knownFolders.documents().path,
      "Scanned-Receipts",
      "images.json"
    );

    const file: File = knownFolders
      .documents()
      .getFile("Scanned-Receipts/images.json");
    if (!file || !file.readTextSync()) {
      return [];
    }

    try {
      const jsonData: SavedImage[] = JSON.parse(file.readTextSync());
      return jsonData;
    } catch (error) {
      console.log("Error parsing JSON: " + error);
      return [];
    }
  }

  getSavedImages(): SavedImage[] {
    return this.retrieveJSON();
  }
}
