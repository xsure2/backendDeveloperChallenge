import bcrypt from "bcryptjs";

export default class PasswordType {
    constructor(value) {
      if (typeof value !== 'string') {
        throw new Error('Password must be a string.');
      }
      
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(value, salt);

      this.value = hash;
    }
  
    getValue() {
      return this.value;
    }
  }
  