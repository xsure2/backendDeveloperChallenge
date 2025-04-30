import Product from '../../domain/entities/Product.js';

export default class UpdateProductUseCase {
    constructor(productRepository, brandRepository) {
      this.productRepository = productRepository;
      this.brandRepository = brandRepository;
    }
  
    async execute(id, updateData) {
      const product = await this.productRepository.findById(id);
      if (!product) {
        throw new Error('Product not found.');
      }

      const fullData = {};
      fullData.id = updateData.id;
      fullData.pictures = updateData.pictures === undefined ? product.pictures : updateData.pictures;
      fullData.sku = updateData.sku === undefined ? product.sku : updateData.sku;
      fullData.sizes = updateData.sizes === undefined ? product.sizes : updateData.sizes;
      fullData.color = updateData.color === undefined ? product.color : updateData.color;
      
      const brand = await this.brandRepository.findOrCreate(updateData.brand);
            
      const productUpdateData = new Product({
        id: fullData.id,
        pictures: fullData.pictures,
        sku: fullData.sku,
        sizes: fullData.sizes,
        color: fullData.color,
        brand,
      });
      
      await this.productRepository.update(productUpdateData)
      return product;
    }
  }
  