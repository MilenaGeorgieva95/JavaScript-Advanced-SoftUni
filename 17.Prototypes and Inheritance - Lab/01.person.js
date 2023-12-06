function createPerson(firstName, lastName) {
  const result = {
    firstName,
    lastName,
  };

  Object.defineProperty(result, "fullName", {
    get() {
      return this.firstName + " " + this.lastName;
    },
    set(fullname) {
      let [firstName, lastName] = fullname.split(" ");
      if (firstName || lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
      }
    },
  });

  return result;
}
