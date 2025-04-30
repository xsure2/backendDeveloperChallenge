export default class EmailType {
    static EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    constructor(value) {
      if (typeof value !== 'string' || !value.match(EmailType.EMAIL_REGEXP)) {
        throw new Error('eMail must be a string and valis eMail address.');
      }
      
      this.value = value;
    }
  
    getValue() {
      return this.value;
    }
  }
  