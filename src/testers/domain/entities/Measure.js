import CreationDateType from '../value-objects/CreationDateType.js';
import HeightType from '../value-objects/HeightType.js';
import WeightType from '../value-objects/WeightType.js';


export default class Measure {
    constructor({ id, creationDate, height, weight }) {
      
      
      if (!id) {
        throw new Error('Measure must have an ID.');
      }

      this.id = id;
      this.creationDate = new CreationDateType(creationDate);
      this.height = new HeightType(height);
      this.weight = new WeightType(weight);
    }

    toPrimitives() {
      return {
        id: this.id,
        creationDate: this.creationDate.value,
        height: this.height.value,
        weight: this.weight.value,
      };
    }
  }

  