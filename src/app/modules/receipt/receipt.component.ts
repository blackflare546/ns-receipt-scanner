import { Component, Injector } from "@angular/core";
import { BaseComponent } from "~/app/core/models/components/base-component.model";
import { ReceiptService } from "~/app/shared/services";

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
  }[] = [];
  totalAmount: number = 0;
  constructor(
    private receiptService: ReceiptService,
    protected injector: Injector
  ) {
    super(injector);
  }

  ngOnInit() {
    this.hideStatusBar();
    this.receiptData = this.receiptService.getReceiptData();
    this.calculateTotalAmount();
  }
  addReceipt() {
    this.navigate("add-receipt");
  }

  private calculateTotalAmount() {
    const test = (this.totalAmount = this.receiptData.reduce(
      (sum, item) => sum + item.price,
      0
    ));
  }
  
}
