import CreateProductUseCase from './use-cases/CreateProductUseCase.js';
import UpdateProductUseCase from './use-cases/UpdateProductUseCase.js';

import ProductRepository from '../infrastructure/ProductRepository.js';
import BrandRepository from '../infrastructure/BrandRepository.js';

const productRepository = new ProductRepository();
const brandRepository = new BrandRepository();

const createProductUseCase = new CreateProductUseCase(productRepository, brandRepository);
const updateProductUseCase = new UpdateProductUseCase(productRepository, brandRepository);

export {
  createProductUseCase,
  updateProductUseCase,
};
