import { Injectable, Injector, inject } from "@angular/core";
import { Application, Page } from "@nativescript/core";
import { isAndroid } from "tns-core-modules";
import { CameraService } from "~/app/shared/services";

@Injectable()
export abstract class BaseComponent {
  page: Page;

  cameraService: CameraService;

  constructor(protected injector: Injector) {
    this.cameraService = injector.get(CameraService);
  }

  hideStatusBar() {
    if (isAndroid) {
      const window = Application.android.startActivity.getWindow();
      window
        .getDecorView()
        .setSystemUiVisibility(android.view.View.SYSTEM_UI_FLAG_FULLSCREEN);
    }
  }
}
