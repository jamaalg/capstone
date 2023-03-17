import { faker } from '@faker-js/faker';

function address() {
  const randomAddress = `${faker.address.streetAddress()} ${faker.address.cityName()}, ${faker.address.stateAbbr()}`;
  return randomAddress;
}

function name() {
  const name = faker.name.fullName();
}

function email() {
  return faker.internet.email();
}

function phoneNumber() {
  return faker.phone.number('(###)-###-####');
}

function company() {
  return faker.company.name();
}

let i = 10;
while (i > 0) {
  i--;
  console.log(address());
}
