import { Component } from "@angular/core";
import { BaseComponent } from "~/app/core/models/components/base-component.model";

@Component({
  selector: "ns-add-receipt",
  templateUrl: "./add-receipt.component.html",
  styleUrls: ["./add-receipt.component.scss"],
})
export class AddReceiptComponent extends BaseComponent {
  back() {
    this.navigate("/");
  }
}
