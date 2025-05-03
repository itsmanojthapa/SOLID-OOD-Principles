/**
 * Open-closed principle
 * it states that "software entities" (classes, modules,functions, etc.)
 * should be open for extension, but closed for modidification.
 *
 * OCP is for making extendable components that are future proof
 * without actually going inside the components and changing the
 * source-code for every new feature.
 */

class BadPaymentProcessor {
  processPayment(amount: number, paymentMethod: string) {
    if (paymentMethod === "creditCard") {
      console.log(`Processing credit card payment of $${amount}`);
    } else if (paymentMethod === "paypal") {
      console.log(`Processing PayPal payment of $${amount}`);
    } else {
      throw new Error("Unknown payment type");
    }
  }
}

const badProcessor = new BadPaymentProcessor();
badProcessor.processPayment(100, "paypal");

/**  if you have to add new upi method, you have to modify the class
 * u have another else if etc.
 * this is a violation of open close principle
 * there is multiple ways to solve this problem
 */

// ------------------------------------------------------------------------

/**
 * with constructors we injected dependency
 * we can use interfaces to inject the dependency
 *
 * It also known as Polymorphism
 * The idea is to define a common interface for all payment processors
 * and then implement that interface in each concrete payment processor class.
 */

interface IPaymentProcessor {
  processPayment(amount: number): void;
}

class PaymentProcessor {
  processor: IPaymentProcessor;

  constructor(processor: IPaymentProcessor) {
    this.processor = processor;
  }

  processPayment(amount: number) {
    this.processor.processPayment(amount);
    console.log("Payment processed successfully");
    console.log("Added to accounting system");
    console.log("Email sent to customer");
  }
}

class CreditCardProcessor implements IPaymentProcessor {
  processPayment(amount: number) {
    console.log(`Processing credit card payment of $${amount}`);
  }
}
class PayPalProcessor implements IPaymentProcessor {
  processPayment(amount: number) {
    console.log(`Processing PayPal payment of $${amount}`);
  }
}

// const paypalProcessor = new PayPalProcessor();
// const processor1 = new PaymentProcessor(paypalProcessor);
// processor1.processPayment(100);

const creditCardProcessor = new CreditCardProcessor();
const processor2 = new PaymentProcessor(creditCardProcessor);
processor2.processPayment(100);

/**
 * * now if you want to add new payment method, you just have to create a new class
 * * and implement the IPaymentProcessor interface for that method.
 * * For example, to add a UPI payment method, create a UpiProcessor class.
 */
