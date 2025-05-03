interface DocumentManager {
  openDocument(path: string): void;
  saveDocument(path: string): void;
  closeDocument(path: string): void;
  printDocument(path: string): void;
  scanDocument(path: string): void;
}

class BasicEditor implements DocumentManager {
  openDocument(path: string): void {
    console.log(`Opening Word document at ${path}`);
  }
  saveDocument(path: string): void {
    console.log(`Saving Word document at ${path}`);
  }
  closeDocument(path: string): void {
    console.log(`Closing Word document at ${path}`);
  }
  printDocument(path: string): void {
    console.log(`Printing Word document at ${path}`);
  }
  scanDocument(): void {
    console.log(`Basic Editor cannot scan documents`);
  }
}
