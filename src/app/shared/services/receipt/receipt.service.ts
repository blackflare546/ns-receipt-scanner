import { Injectable } from "@angular/core";
import * as appSettings from "tns-core-modules/application-settings";

@Injectable({
  providedIn: "root",
})
export class ReceiptService {
  private storageKey = "receiptData";

  getReceiptData(): {
    title: string;
    category: string;
    date: Date;
    price: number;
  }[] {
    const storedData = appSettings.getString(this.storageKey);
    return storedData ? JSON.parse(storedData) : [];
  }

  saveReceiptData(receiptData: any[]): void {
    appSettings.setString(this.storageKey, JSON.stringify(receiptData));
  }

  addReceipt(receipt: {
    title: string;
    category: string;
    date: Date;
    price: number;
  }): void {
    const currentData = this.getReceiptData();
    currentData.push(receipt);
    this.saveReceiptData(currentData);
  }
}
