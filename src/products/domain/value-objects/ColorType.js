export default class ColorType {
    constructor(value) {
      if (typeof value !== 'string' || value.length === 0) {
        throw new Error('Color must be a non-empty string');
      }
      this.value = value;
    }

    getValue(){
        return this.value;
    }
}