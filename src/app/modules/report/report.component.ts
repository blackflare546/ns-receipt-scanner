import { Component } from "@angular/core";
import { knownFolders, path } from "tns-core-modules";
import * as utilities from "tns-core-modules/utils/utils";

@Component({
  selector: "ns-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.scss"],
})
export class ReportComponent {
  selectedContainer: string = null;

  disableGenerateWord: boolean = true;
  disableGenerateExcel: boolean = true;

  onContainerTap(container: string): void {
    this.selectedContainer =
      this.selectedContainer === container ? null : container;
  }

  onGenerateTap() {
    console.log("Selected container:", this.selectedContainer);
  }

  generateCSV() {
    const jsonData = [
      { Name: "John Doe", Email: "john@example.com" },
      { Name: "Jane Doe", Email: "jane@example.com" },
      { Name: "Jane Doe", Email: "jane@example.com" },
      { Name: "Jane Doe", Email: "jane@example.com" },
      { Name: "Jane Doe1", Email: "jane@example.com" },
    ];

    const csvData = this.convertToCSV(jsonData);

    const documents = knownFolders.documents();
    const filePath = path.join(documents.path, "sample.csv");

    const file = documents.getFile("sample.csv");
    file
      .writeText(csvData)
      .then(() => {
        console.log("File saved at:", filePath);
        utilities.openFile(filePath);
      })
      .catch((err) => {
        console.error("Error writing file:", err);
      });
  }

  private convertToCSV(data: any[]): string {
    const header = Object.keys(data[0]).join(",");
    const rows = data.map((obj) => Object.values(obj).join(","));
    return [header, ...rows].join("\n");
  }


}
