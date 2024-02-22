import { HostListener, Injectable, Injector, NgZone, inject } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { ActivatedRoute, Router } from "@angular/router";
import { Application, Frame, Page } from "@nativescript/core";
import { isAndroid, isIOS } from "tns-core-modules";
import { confirm, alert } from "@nativescript/core/ui/dialogs";
import { Subject, Subscription, timer } from "rxjs";
import { distinctUntilChanged, switchMap, tap } from "rxjs/operators";
import {
  android as onAndroid,
  AndroidApplication,
} from "tns-core-modules/application";

@Injectable()
export abstract class BaseComponent {
  page: Page;
  injector: Injector = inject(Injector)

  constructor() {}

  hideStatusBar() {
    if (isAndroid) {
      const window = Application.android.startActivity.getWindow();
      window
        .getDecorView()
        .setSystemUiVisibility(android.view.View.SYSTEM_UI_FLAG_FULLSCREEN);
    }
  }
}
