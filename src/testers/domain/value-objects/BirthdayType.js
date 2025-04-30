export default class BirthdayType {
    constructor(value) {
      const date = new Date(value);
  
      if (!(date instanceof Date) || isNaN(date.getTime())) {
        throw new Error('Invalid date format for Birthday (yyyy-mm-dd).');
      }
  
      const today = new Date();
      if (date > today) {
        throw new Error('Birthday cannot be a future date.');
      }
  
      this.value = date;
    }
  
    getValue() {
      return this.value;
    }
  }
  