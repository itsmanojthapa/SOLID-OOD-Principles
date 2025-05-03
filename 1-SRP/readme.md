# SOLID: Single responsibility principle

- The class should have one reason to change.
- Gather together the things that change for the same reasons. Separate those things that change for different reasons. In some of his talks, he also argues that the principle is, in particular, about roles or actors. For example, while they might be the same person, the role of an accountant is different from a database administrator. Hence, each module should be responsible for each role
- SRP, is to rule for making sure our components, funtions or modules are responsible for doing one thing only, and thus, have only a single reason to change.

## WRONG

- calculatePricing: diff reason might have different pricing strategies department
- generateInvoice: Invoice may have there own Inventory department
- processPayment: Payment may have their own financial department

so if i want to change the Order class, Inventory, financial department, and pricing strategy will be affected. So the class has multiple reasons to change. So it violates the SRP principle.

---
