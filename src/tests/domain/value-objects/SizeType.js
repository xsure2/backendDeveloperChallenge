export default class SizeType {
  constructor(value) {
    if (typeof value !== 'string' || value.length === 0) {
      throw new Error('Size must be a non-empty string');
    }
    this.value = value.trim();
  }
  
  getValue() {
      return this.value;
  }
}
  