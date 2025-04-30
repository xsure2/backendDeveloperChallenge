export default class TestsDoneType {
    constructor(value) {
      if (typeof value !== 'number' || value < 0) {
        throw new Error('TestsDone must be a number >= 0.');
      }
      this.value = value;
    }
  
    getValue() {
      return this.value;
    }
  }
  