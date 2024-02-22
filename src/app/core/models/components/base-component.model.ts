import { HostListener, Injectable, Injector, NgZone } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { ActivatedRoute, Router } from "@angular/router";
import { Frame, Page } from "@nativescript/core";
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
  constructor(protected injector: Injector) {}
}
