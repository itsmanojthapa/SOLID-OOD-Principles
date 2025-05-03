class BUser {
  getAccessLevel() {
    console.log("user access level");
  }
  getRole() {
    console.log("user role");
  }
}

class BAdmin extends BUser {
  getAccessLevel() {
    console.log("admin access level");
  }
  getRole() {
    console.log("admin role");
  }
}

class BManager extends BUser {
  getAccessLevel() {
    console.log("manager access level");
  }
  getRole() {
    console.log("manager role");
  }
}

class BCustomer extends BUser {
  getAccessLevel() {
    throw new Error("Customer does not have access level");
  }
  getRole() {
    console.log("customer role");
  }
}

function bgetUserAccessLevel(user: BUser) {
  user.getAccessLevel();
}

bgetUserAccessLevel(new BAdmin());
bgetUserAccessLevel(new BCustomer());
