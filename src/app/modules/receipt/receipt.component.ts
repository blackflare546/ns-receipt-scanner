import { Component } from "@angular/core";
import { BaseComponent } from "~/app/core/models/components/base-component.model";

@Component({
  selector: "ns-receipt",
  templateUrl: "./receipt.component.html",
  styleUrls: ["./receipt.component.scss"],
})
export class ReceiptComponent extends BaseComponent {
  currentDate: Date = new Date();
  receiptData: { text: string; date: Date }[] = [
    { text: "v1", date: new Date() },
    { text: "v2", date: new Date() },
    { text: "v3", date: new Date() },
    { text: "v4", date: new Date() },
    { text: "v5", date: new Date() },
    { text: "v6", date: new Date() },
    { text: "v18", date: new Date() },
    { text: "v17", date: new Date() },
    { text: "v12", date: new Date() },
    { text: "v1234", date: new Date() },
    { text: "v1234", date: new Date() },
    { text: "v13", date: new Date() },
    { text: "v14", date: new Date() },
    { text: "v15", date: new Date() },
    { text: "v16", date: new Date() },
    { text: "v17", date: new Date() },
    { text: "v12", date: new Date() },
  ];

  ngOnInit() {
    this.hideStatusBar();
  }
}
