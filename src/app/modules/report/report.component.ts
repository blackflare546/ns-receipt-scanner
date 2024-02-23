import { Component } from "@angular/core";

@Component({
  selector: "ns-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.scss"],
})
export class ReportComponent {
  selectedContainer: string = null;

  onContainerTap(container: string): void {
    this.selectedContainer =
      this.selectedContainer === container ? null : container;
  }

  onGenerateTap() {
    console.log("Selected container:", this.selectedContainer);
  }
}
