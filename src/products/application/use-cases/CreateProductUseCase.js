import Product from '../../domain/entities/Product.js';

export default class CreateProductUseCase {
  constructor(productRepository, brandRepository) {
    this.productRepository = productRepository;
    this.brandRepository = brandRepository;
  }

  async execute({ id, sku, pictures, sizes, color, brand }) {
    brand = await this.brandRepository.findOrCreate(brand);
    const product = new Product({ id, sku, pictures, sizes, color, brand });
    await this.productRepository.save(product);
    return product;
  }
}
