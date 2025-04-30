export default class PicturesType {
  constructor(value) {
    if (!Array.isArray(value) || value.some(p => typeof p !== 'string')) {
      throw new Error('Pictures must be an array of URLs');
    }
    this.value = value;
  }
  
  getValue() {
      return this.value;
    }
}
  