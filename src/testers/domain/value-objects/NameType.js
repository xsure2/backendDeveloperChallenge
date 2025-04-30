export default class NameType {
    constructor(value) {
      if (typeof value !== 'string' || value.trim().length === 0) {
        throw new Error('Name must be a non-empty string.');
      }
      this.value = value.trim();
    }
  
    getValue() {
      return this.value;
    }
  }
  