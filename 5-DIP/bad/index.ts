class BUserController {
  constructor(private userService: BUserService) {}
  save() {
    console.log("User saved");
    this.userService.save();
  }
}

class BUserService {
  // constructor(private userRepository: UserRepository) {} //this is shortcut in TS
  buserRepository: BUserRepository;
  constructor(userRepository: BUserRepository) {
    this.buserRepository = userRepository;
  }
  save() {
    console.log("Save Product");
    this.buserRepository.save();
  }
}

class BUserRepository {
  save() {
    console.log("User saved to database");
  }
}

const buserRepository = new BUserRepository();
const buserService = new BUserService(buserRepository);
const buserController = new BUserController(buserService);
buserController.save();

// Voilation of Dependency Inversion
// Directly dependent on inplementation
// to solve this we can use interface
