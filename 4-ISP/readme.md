# ISP: Interface segregation principle

- no code should be forced to depend on methods it does not use, happends withn we implement interface class
- ISP splits interfaces that are very large into smaller and more specific ones so that clients will only have to know about the methods that are of interest to them.

- ISP is for preventing the creation of overlylarge, monolithic interfaces that force depending components on props they don't use.

- ISP is intended to keep a system decoupled and thus easier to refactor, change, and redeploy.
- ISP is also a key principle in the design of distributed systems and microservices where the cost of communication between components can be high.
- ISP is one of the five SOLID principles of OOP Design, and one of the six IDEALS principles of microservice design.
