import { Product } from "./Order";

export class PricingCalucator {
  calculatePricing(products: Product[]) {
    return products.reduce((total, product) => total + product.price, 0);
  }
}
