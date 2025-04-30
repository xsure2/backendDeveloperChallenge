export default class CreationDateType {
    constructor(value) {
      const date = new Date(value);
  
      if (!(date instanceof Date) || isNaN(date.getTime())) {
        throw new Error('Invalid date format for Birthday (yyyy-mm-dd).');
      }
  
      this.value = date;
    }
  
    getValue() {
      return this.value;
    }
  }
  