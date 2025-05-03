interface Repository {
  save(): void;
}

interface Service {
  save(): void;
}

class UserController {
  constructor(private service: Service) {}
  save() {
    console.log("User saved");
    this.service.save();
  }
}

class UserService {
  constructor(private repository: Repository) {}

  save() {
    console.log("Save Product");
    this.repository.save();
  }
}

class PostgreRepository implements Repository {
  save() {
    console.log("User saved to database");
  }
}

class MongoRepository implements Repository {
  save() {
    console.log("User saved to database");
  }
}

class ModernUserService implements Service {
  constructor(private repository: Repository) {}

  save() {
    console.log("Save Product");
    this.repository.save();
  }
}

const mongoRepo = new MongoRepository();
const postgreRepo = new PostgreRepository();
// const userService = new UserService(mongoRepo);
// const userService = new UserService(postgreRepo);
const modernService = new ModernUserService(postgreRepo);
// const userService = new UserService(postgreRepo);
const userController = new UserController(modernService);
userController.save();

// Now any changes in Repository will not affect the UserService UserController
