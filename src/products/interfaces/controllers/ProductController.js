export default class ProductController {
    constructor({createProductUseCase, updateProductUseCase}) {
      this.createProductUseCase = createProductUseCase;
      this.updateProductUseCase = updateProductUseCase;

      this.createProduct = this.createProduct.bind(this);
      this.updateProduct = this.updateProduct.bind(this);
    }
  
    async createProduct(req, res) {
      try {
        const { id, sku, pictures, sizes, color, brand } = req.body;
        const product = await this.createProductUseCase.execute({ id, sku, pictures, sizes, color, brand });
        res.status(201).json({ message: 'Product created successfully.', product });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }

    async updateProduct(req, res){
      try {
        const { id } = req.params;

        const name = req.body.name !== undefined ? req.body.name : undefined;
        const pictures = req.body.pictures !== undefined ? req.body.pictures : undefined;
        const sizes = req.body.sizes !== undefined ? req.body.sizes : undefined;
        const logo = req.body.logo !== undefined ? req.body.logo : undefined;
        const brand = req.body.brand !== undefined ? req.body.brand : undefined;
        //const { name, pictures, sizes, logo, brand } = req.body;
        const product = await this.updateProductUseCase.execute(id, { name, pictures, sizes, logo, brand });
        res.status(201).json({ message: 'Product created successfully.', product });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  }

  