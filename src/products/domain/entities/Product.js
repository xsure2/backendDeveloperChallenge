import PicturesType from '../value-objects/PicturesType.js';
import SizesType from '../value-objects/SizesType.js';
import SKUType from '../value-objects/SKUType.js'
import ColorType from '../value-objects/ColorType.js';
import Brand from './Brand.js';


export default class Product {
  constructor({ id, sku, pictures, sizes, color, brand }) {
    this.id = id;
    this.pictures = new PicturesType(pictures);
    this.sizes = new SizesType(sizes);
    this.sku = new SKUType(sku);
    this.color = new ColorType(color);
    this.brand = new Brand(brand);
  }

  toPrimitives() {
    return {
      id: this.id,
      pictures: this.pictures.value,
      sizes: this.sizes.value,
      sku: this.sku.value,
      color: this.color.value,
      brand: this.brand.toPrimitives(),
    };
  }

  update(data) {
    if (data.pictures) this.pictures = new PicturesType(data.pictures);
    if (data.sizes) this.sizes = new SizesType(data.sizes);
    if (data.sku) this.sku = new SKUType(data.sku);
    if (data.color) this.color = new ColorType(color);
    if (data.brand) this.brand = new Brand(brand);
  }
}
