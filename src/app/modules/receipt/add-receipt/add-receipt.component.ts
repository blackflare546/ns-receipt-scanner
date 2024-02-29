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
  form: FormGroup;
  items: ValueList<string>;
  public hint = "Select Category";

  back() {
    this.navigate("/");
  }

  constructor(
    private fb: FormBuilder,
    protected injector: Injector,
    private receiptService: ReceiptService
  ) {
    super(injector);
    this.form = this.fb.group({
      title: ["", Validators.required],
      price: ["", Validators.required],
      date: [new Date(), Validators.required],
      notes: [""],
      category: [""],
    });

    this.items = new ValueList<string>([
      { value: "Food/Restaurant", display: "Restaurant" },
      { value: "Electric", display: "Electric Bill" },
      { value: "Internet", display: "Internet Bill" },
    ]);
  }

  onSave() {
    if (this.form.valid) {
      const selectedCategoryText = this.items.getDisplay(
        this.form.get("category").value
      );

      const receipt = {
        title: this.form.get("title").value,
        category: selectedCategoryText,
        date: this.form.get("date").value,
        price: this.form.get("price").value,
      };

      this.receiptService.addReceipt(receipt);
      this.navigate("/");
      this.form.reset();
    } else {
      console.log("Form data not saved. Validation errors:", this.form.value);
    }
  }
}
