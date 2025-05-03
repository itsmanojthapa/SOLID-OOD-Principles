// Single responsibility principle

import { Invoice } from "./invoice";
import { Product, Order } from "./Order";
import { PaymentProcessor } from "./paymentProcessor";
import { PricingCalucator } from "./pricingCalculator";

const product1 = new Product("1", "Laptop", 52);
const product2 = new Product("2", "Phone", 100);

const order = new Order();
order.addProduct(product1);
order.addProduct(product2);

const pricingCalculator = new PricingCalucator();
const totalPrice = pricingCalculator.calculatePricing(order.getProduct());

const invoice = new Invoice();
invoice.generateInvoice(order.getProduct(), totalPrice);

const paymentProcessor = new PaymentProcessor();
paymentProcessor.processPayment(order);
