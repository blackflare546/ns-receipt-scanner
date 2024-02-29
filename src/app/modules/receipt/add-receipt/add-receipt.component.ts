import { Component, Injector } from "@angular/core";
import { BaseComponent } from "~/app/core/models/components/base-component.model";
import { ValueList } from "nativescript-drop-down";
import { ReceiptService } from "~/app/shared/services";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "ns-add-receipt",
  templateUrl: "./add-receipt.component.html",
  styleUrls: ["./add-receipt.component.scss"],
})
export class AddReceiptComponent extends BaseComponent {
  public selectedIndex = 1;
  showSaveButton: boolean = true;
  form: FormGroup;
  items: ValueList<string>;
  public hint = "Select Category";
  buttonText: string = "Cancel";
  back() {
    this.navigate("/");
  }

  constructor(
    private fb: FormBuilder,
    protected injector: Injector,
    private receiptService: ReceiptService
  ) {
    super(injector);

    const selectedReceipt = this.receiptService.getSelectedReceipt();
    if (selectedReceipt) {
      this.hint = selectedReceipt.category
        ? selectedReceipt.category
        : "Select Category";
      this.showSaveButton = true;
      this.buttonText = "Back";
    } else {
      this.showSaveButton = false;
    }

    this.form = this.fb.group({
      title: [
        selectedReceipt ? selectedReceipt.title : "",
        Validators.required,
      ],
      price: [
        selectedReceipt ? selectedReceipt.price : "",
        Validators.required,
      ],
      date: [
        selectedReceipt ? selectedReceipt.date : new Date(),
        Validators.required,
      ],
      notes: [selectedReceipt ? selectedReceipt.notes : ""],
      category: [selectedReceipt ? selectedReceipt.category : ""],
    });

    this.items = new ValueList<string>([
      { value: "Food/Restaurant", display: "Restaurant" },
      { value: "Electric", display: "Electric Bill" },
      { value: "Internet", display: "Internet Bill" },
    ]);
  }

  onBack() {
    this.navigate("/");
    console.log("BACK");
  }

  onSave() {
    if (this.form.valid) {
      const selectedCategoryText = this.items.getDisplay(
        this.form.get("category").value
      );
      console.log("SAVE");

      const receipt = {
        title: this.form.get("title").value,
        category: selectedCategoryText,
        date: this.form.get("date").value,
        price: this.form.get("price").value,
        notes: this.form.get("notes").value,
      };

      this.receiptService.addReceipt(receipt);
      this.showSaveButton = true;
      // Clear the selected receipt after using it
      this.receiptService.setSelectedReceipt(null);

      this.navigate("/");
      this.form.reset();
      this.hint = "Select Category";
    } else {
      console.log("Form data not saved. Validation errors:", this.form.value);
    }
  }
}
