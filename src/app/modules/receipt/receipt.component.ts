import { Component, Injector, OnInit } from "@angular/core";
import { BaseComponent } from "~/app/core/models/components/base-component.model";
import { ReceiptService } from "~/app/shared/services";

@Component({
  selector: "ns-receipt",
  templateUrl: "./receipt.component.html",
  styleUrls: ["./receipt.component.scss"],
})
export class ReceiptComponent extends BaseComponent implements OnInit {
  receiptData: {
    title: string;
    category: string;
    date: Date;
    price: number;
  }[] = [];

  constructor(
    private receiptService: ReceiptService,
    protected injector: Injector
  ) {
    super(injector);
  }

  totalAmount: number = 0;
  ngOnInit() {
    this.hideStatusBar();
    this.receiptData = this.receiptService.getReceiptData();
    this.calculateTotalAmount();
  }
  addReceipt() {
    this.navigate("add-receipt");
  }

  private calculateTotalAmount() {
    this.totalAmount = this.receiptData.reduce((sum, item) => {
      console.log("Item Price:", item.price);
      return sum + Number(item.price);
    }, 0);
    console.log("Total Amount:", this.totalAmount);
  }
}
