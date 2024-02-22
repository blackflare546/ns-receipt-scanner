import Theme from "@nativescript/theme";

export class BaseAppComponent {
  initialize(): void {
    this.setThemeLight();
  }

  setThemeLight(): void {
    try {
      Theme.setMode(Theme.Light);
    } catch (e) {
      console.log("Error setting theme to light.");
    }
  }

}
