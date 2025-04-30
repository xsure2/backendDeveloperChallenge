export default class WeightType {
    constructor(value) {
      if (typeof value !== 'number' || value < 0 || (value % 1) == 0) {
        throw new Error('Weight must be a number >= 0 and with 1 decimal.');
      }
      this.value = value;
    }
  
    getValue() {
      return this.value;
    }
  }
  