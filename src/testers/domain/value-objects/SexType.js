export default class SexType {
    static VALID_SEX = ['Male', 'Female'];
  
    constructor(value) {
      if (!SexType.VALID_SEX.includes(value)) {
        throw new Error(`Sex must be one of: ${SexType.VALID_SEX.join(', ')}`);
      }
      this.value = value;
    }
  
    getValue() {
      return this.value;
    }
  }