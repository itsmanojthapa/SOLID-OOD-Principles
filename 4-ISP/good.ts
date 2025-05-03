interface DocumetOpen {
  openDocument(path: string): void;
}
interface DocumentSave {
  saveDocument(path: string): void;
}
interface DocumentClose {
  closeDocument(path: string): void;
}
interface DocumentPrint {
  printDocument(path: string): void;
}
interface DocumentScan {
  scanDocument(path: string): void;
}

class Editor
  implements DocumetOpen, DocumentSave, DocumentClose, DocumentPrint
{
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
}

class AdvancedEditor
  implements
    DocumetOpen,
    DocumentSave,
    DocumentClose,
    DocumentPrint,
    DocumentScan
{
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
  scanDocument(path: string): void {
    console.log(`Scanning document at ${path}`);
  }
}
