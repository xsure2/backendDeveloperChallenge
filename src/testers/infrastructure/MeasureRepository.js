import knex from '../../shared/infrastructure/Database.js';

export default class MeasureRepository {
        
    async findById(id) {
      return await knex('measures').where({ id }).first();
    }
  
    async create(measure) {
      await knex('measures').insert({
        id: measure.id,
        creation_date: measure.creationDate,
        height: measure.height,
        weight: measure.weight,
      });
      return measure;
    }
  
    async findOrCreate(measure) {
      const existing = await this.findById(measure.id);
      if (existing) return existing;
  
      await this.create(measure);
      return measure;
    }
  }
  