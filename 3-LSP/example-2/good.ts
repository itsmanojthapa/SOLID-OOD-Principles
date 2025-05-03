class BaseUser {
  getRole() {
    console.log("user role");
  }
}

class User extends BaseUser {
  getAccessLevel() {
    console.log("user access level");
  }
  getRole() {
    console.log("user role");
  }
}

class Admin extends User {
  getAccessLevel() {
    console.log("admin access level");
  }
  getRole() {
    console.log("admin role");
  }
}

class Manager extends User {
  getAccessLevel() {
    console.log("manager access level");
  }
  getRole() {
    console.log("manager role");
  }
}

class Customer extends BaseUser {
  getRole() {
    console.log("customer role");
  }
}

function getUserAccessLevel(user: User) {
  user.getAccessLevel();
}

getUserAccessLevel(new Admin());
// getUserAccessLevel(new Customer());
