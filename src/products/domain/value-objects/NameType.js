export default class NameType {
    constructor(value) {
      if (typeof value !== 'string' || value.length === 0) {
        throw new Error('Name must be a non-empty string');
      }
      this.value = value;
    }

    getValue(){
        return this.value;
    }
}