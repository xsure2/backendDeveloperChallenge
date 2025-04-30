import NameType from '../value-objects/NameType.js';
import LogoType from '../value-objects/LogoType.js';

export default class Brand {
  constructor({ id, name, logo }) {
    this.id = id;
    this.name = new NameType(name);
    this.logo = new LogoType(logo);
  }

  toPrimitives() {
    return {
      id: this.id,
      name: this.name.getValue(),
      logo: this.logo.getValue(),
    };
  }
}
