export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    return /^[a-z]+(?!.*\d{3})[0-9a-z_-]*[a-z]+$|^[a-z]+$/i.test(this.name);
  }
}
