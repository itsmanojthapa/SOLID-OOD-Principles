import { Product } from "./Order";

export class Invoice {
  generateInvoice(products: Product[], totalPrice: number) {
    console.log(`
Invoice Date: ${new Date().toDateString()}
------------------------------------------
~Product Name\t\tPrice`);

    products.forEach((product) => {
      console.log(`${product.name}\t\t\t${product.price}`);
    });
    console.log(`
------------------------------------------
    Total Price: ${totalPrice}
------------------------------------------
        `);
  }
}
