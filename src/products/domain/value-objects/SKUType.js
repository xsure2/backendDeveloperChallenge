export default class SKUType {
    constructor(value) {
      if (typeof value !== 'string' || value.length === 0) {
        throw new Error('SKU must be a non-empty string');
      }
      this.value = value;
    }

    getValue(){
        return this.value;
    }
}