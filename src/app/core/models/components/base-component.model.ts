import { Injectable, Injector, inject } from "@angular/core";
import { ActivatedRoute, NavigationExtras } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { Application, Frame, Page } from "@nativescript/core";
import { isAndroid } from "tns-core-modules";
import { CameraService } from "~/app/shared/services";

interface NavExtras {
  queryParams?: Object;
  replaceUrl?: boolean;
  clearHistory?: boolean;
  animated?: boolean;
  transition?: Object;
  relativeTo?: ActivatedRoute | null;
}

@Injectable()
export abstract class BaseComponent {
  page: Page;
  lastPath = "";
  cameraService: CameraService;
  routerExtension: RouterExtensions;
  activeRoute: ActivatedRoute;
  navExtras: NavExtras;

  constructor(protected injector: Injector) {
    this.cameraService = injector.get(CameraService);
    this.routerExtension = injector.get(RouterExtensions);
    this.activeRoute = injector.get(ActivatedRoute);
  }

  hideStatusBar() {
    if (isAndroid) {
      const window = Application.android.startActivity.getWindow();
      window
        .getDecorView()
        .setSystemUiVisibility(android.view.View.SYSTEM_UI_FLAG_FULLSCREEN);
    }
  }
  navigate(path: string, options: NavigationExtras = {}): void {
    this.lastPath = path;
    this.routerExtension.navigate([path], {
      ...this.navExtras,
      ...{ relativeTo: this.activeRoute },
      ...options,
    });
  }
  
}
