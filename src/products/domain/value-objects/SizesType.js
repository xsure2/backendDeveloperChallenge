import SizeType from './SizeType.js';

export default class SizesType {
  constructor(value) {
    if (!Array.isArray(value) || value.length === 0) {
      throw new Error('Sizes must be a non-empty array.');
    }
    this.value = value.map(size => new SizeType(size).value);
  }

  getValues() {
    return this.value.map(size => size.getValue());
  }
}
