import { Injectable } from "@angular/core";
import * as appSettings from "@nativescript/core/application-settings";

@Injectable({
  providedIn: "root",
})
export class ReceiptService {
  private storageKey = "receiptData";
  private selectedReceiptKey = "selectedReceipt"; // New key for selected receipt

  getReceiptData(): {
    title: string;
    category: string;
    date: Date;
    price: number;
    notes: string;
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
    notes: string;
  }): void {
    const currentData = this.getReceiptData();
    currentData.push(receipt);
    this.saveReceiptData(currentData);
  }

  // Method to set the selected receipt
  setSelectedReceipt(selectedReceipt: any): void {
    appSettings.setString(
      this.selectedReceiptKey,
      JSON.stringify(selectedReceipt)
    );
  }

  // Method to get the selected receipt
  getSelectedReceipt(): any {
    const selectedReceiptString = appSettings.getString(
      this.selectedReceiptKey
    );
    return selectedReceiptString ? JSON.parse(selectedReceiptString) : null;
  }
}
