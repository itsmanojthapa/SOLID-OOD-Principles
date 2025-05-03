export class Product {
  id: string;
  name: string;
  price: number;

  constructor(id: string, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

export class Order {
  products: Product[] = [];

  getProduct() {
    return this.products;
  }
  addProduct(product: Product) {
    this.products.push(product);
  }
  removeProduct(productId: string) {
    this.products = this.products.filter((product) => product.id !== productId);
  }

  getProductCount() {
    return this.products.length;
  }
  getProductById(productId: string) {
    return this.products.find((product) => product.id === productId);
  }

  // calculatePricing() {
  //   return this.products.reduce((total, product) => total + product.price, 0);
  // }

  processPayment() {
    console.log("Processing payment...");
    console.log("Payment processed successfully!");
    console.log("Added to accounting system");
    console.log("Email sent to customer");
  }
}
