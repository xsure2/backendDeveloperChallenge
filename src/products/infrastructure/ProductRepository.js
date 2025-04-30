import knex from '../../shared/infrastructure/Database.js';
import Product from '../domain/entities/Product.js';
import PicturesType from '../domain/value-objects/PicturesType.js'
import SizesType from '../domain/value-objects/SizesType.js'
import LogoType from '../domain/value-objects/LogoType.js'

export default class ProductRepository {
  constructor(brandRepository) {
    this.brandRepository = brandRepository;
  }
  async save(product) {
    const { id, sku, pictures, sizes, color, brand } = product.toPrimitives();
 
    const [productId] = await knex('products').insert({
      id,
      sku,
      pictures: JSON.stringify(pictures),
      sizes: JSON.stringify(sizes),
      color,
      brand_id: brand.id,  
    });
    return productId;
  }

  async update(product) {
    const { id, sku, pictures, sizes, color, brand } = product.toPrimitives();

    await knex('products')
      .where({ id: id })
      .update({
        sku,
        pictures: JSON.stringify(pictures),
        sizes: JSON.stringify(sizes),
        color,
        brand_id: brand.id,  
      });
  }

  async findById(id) {
    const row = await knex('products').where({ id }).first();
    if (!row) return null;
    const brand = await this.brandRepository.findById(row.brand_id);
    
    return new Product({
      id: row.id,
      sku: row.sku,
      pictures: new PicturesType(JSON.parse(row.pictures)),
      sizes: new SizesType(JSON.parse(row.sizes)),
      logo: new LogoType(row.logo),
      brand: brand
    });
  }
}

