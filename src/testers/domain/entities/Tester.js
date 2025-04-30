import NameType from '../value-objects/NameType.js';
import BirthdayType from '../value-objects/BirthdayType.js';
import SexType from '../value-objects/SexType.js';
import EmailType from '../value-objects/EmailType.js';
import PasswordType from '../value-objects/PasswordType.js';
import TestsDoneType from '../value-objects/TestsDoneType.js';
import Measure from './Measure.js'

export default class Tester {
  constructor({ id, name, birthday, sex, email, password, testsDone, measure}) {
    if (!id) {
      throw new Error('Tester must have an ID.');
    }

    this.id = id;
    this.name = new NameType(name);
    this.birthday = new BirthdayType(birthday);
    this.sex = new SexType(sex);
    this.email = new EmailType(email);
    this.password = new PasswordType(password);
    this.testsDone = new TestsDoneType(testsDone);
    this.measures =  new Measure(measure);
  }

  toPrimitives() {
    return {
      id: this.id,
      name: this.name.value,
      birthday: this.birthday.value,
      sex: this.sex.value,
      email: this.email.value,
      password: this.password.value,
      testsDone: this.testsDone.value,
      measure: this.measures.toPrimitives(),
    };
  }

  addMeasure(measure) {
    this.measures.push(measure);
  }

  getName() {
    return this.name.getValue();
  }

  getBirthday() {
    return this.birthday.getValue();
  }

  getSex() {
    return this.sex.getValue();
  }
}
