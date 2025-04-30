export default class LogoType {
    constructor(value) {
      if (typeof value !== 'string' || !value.startsWith('http')) {
        throw new Error('Logo must be a valid URL.');
      }
      this.value = value;
    }
  
    getValue() {
      return this.value;
    }
  }
  