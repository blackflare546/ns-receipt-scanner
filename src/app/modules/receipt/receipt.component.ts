import { Component, Injector } from "@angular/core";
import { BaseComponent } from "~/app/core/models/components/base-component.model";

@Component({
  selector: "ns-receipt",
  templateUrl: "./receipt.component.html",
  styleUrls: ["./receipt.component.scss"],
})
export class ReceiptComponent extends BaseComponent {
  receiptData: {
    title: string;
    category: string;
    date: Date;
    price: number;
  }[] = [
    { title: "v1", category: "test", date: new Date(), price: 10000 },
    { title: "v1", category: "test", date: new Date(), price: 10000 },
    { title: "v1", category: "test", date: new Date(), price: 10000 },
    { title: "v1", category: "test", date: new Date(), price: 10000 },
    { title: "v1", category: "test", date: new Date(), price: 10000 },
    { title: "v1", category: "test", date: new Date(), price: 10000 },
    { title: "v1", category: "test", date: new Date(), price: 10000 },
  ];

  ngOnInit() {
    this.hideStatusBar();
  }
  addReceipt() {
    this.navigate("add-receipt");
  }
}
