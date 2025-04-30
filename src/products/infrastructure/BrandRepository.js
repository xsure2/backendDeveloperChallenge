import knex from '../../shared/infrastructure/Database.js';

export default class BrandRepository {
     
    async findByName(name) {
      return await knex('brands').where({ name }).first();
    }

    async findById(id) {
      return await knex('brands').where({ id }).first();
    }
  
    async create(brand) {
      await knex('brands').insert(brand);
      return brand;
    }
  
    async findOrCreate(brand) {
      const existing = await this.findByName(brand.name);
      if (existing) return existing;
  
      await this.create(brand);
      return brand;
    }
  }
  