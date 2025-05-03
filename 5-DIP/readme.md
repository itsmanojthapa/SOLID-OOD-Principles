# DIP: Dependency Inversion Principle

- Entity should depend on abstractions, not on concretions.

- High-level modules should not depend on low-level modules. Both should depend on abstractions.
- Abstractions should not depend on details. Details should depend on abstractions.
- This principle is about decoupling high-level and low-level modules by introducing an abstraction layer.
- It helps to reduce the coupling between different parts of the system, making it easier to change and maintain.
- It promotes the use of interfaces or abstract classes to define the behavior of high-level modules, allowing low-level modules to implement these interfaces.
- This way, high-level modules can work with any implementation of the interface, making the system more flexible and extensible.

```Text
High-level                                           Lowlevel
 ___________      ___________      ___________      ___________
|           |    |           |    | MongoDB   |    |-----------|
| Controller|--->|  Service  |--->| Repository|--->|----DB-----|
|___________|    |___________|    |___________|    |___________|

Directly depend on each others implementation WRONG
```

- Decoupling high-level and low-level modules where they depend on abstraction and not coalition.
- components, modules or funtions should not directly depend on other concreate components, but rather, depend on commpn abstractions.
- DIP is for promoting the use of abstractions to achive flexibility, extensibility and maintainability in the codebase.

```Text
Dependency Inversion Principle
         ___________           ___________
        |           |         |           |
   _--> | interface |<---_--->| interface |<---_
   |    |___________|    |    |___________|    |
   |                     |                     |
 __|________      _______|___        __________|      ___________
|           |    |           |      |PostgreSQL |    |-----------|
| Controller|--->| Service   |----->| Repository|--->|----DB-----|
|___________|    |___________|      |___________|    |___________|

```

- Now, the high-level module (Controller) depends on the abstraction (interface) instead of the low-level module (Service).
- with the help of Inverion Dependency, now we can easily change the implementation of the low-level module (Service) without affecting the high-level module (Controller).
- if we want to change the MongoDB to postgreSQL, we just need to implement the interface in the PostgreSQL repository and inject it into the service.
- no need to change the controller, service etc.

```Text
Dependency Inversion Principle
         ___________           ___________            ___________
        |           |         |           |<---------| MongoDB   |
   _--> | interface |<---_--->| interface |<---_     |Repository |
   |    |___________|    |    |___________|    |     |___________|
   |                     |                     |
 __|________      _______|___        __________|      ___________
|           |    |           |      |PostgreSQL |    |-----------|
| Controller|--->| Service   |----->| Repository|--->|----DB-----|
|___________|    |___________|      |___________|    |___________|

```
