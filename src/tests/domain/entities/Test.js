import SizeType from '../value-objects/SizeType.js';

export default class Test {
  constructor({ id, tester, product, size }) {
    this.id = id;
    this.tester = tester; 
    this.product = product; 
    this.size = new SizeType(size);
  }

  toPrimitives() {
    return {
      id: this.id,
      testerId: this.tester.id,
      productId: this.product.id,
      size: this.size.value,
    };
  }

  static fromPrimitives({ id, tester, product, size }) {
    return new Test({
      id,
      tester,
      product,
      size,
    });
  }
}