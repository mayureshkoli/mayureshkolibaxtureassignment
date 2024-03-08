import { faker } from '@faker-js/faker';



export function createRandomUser() {
  return {
    _id: faker.datatype.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    address: faker.location.secondaryAddress(),
    phone: faker.phone.number()
  };
}

export const USERS = Array.from({ length: 8 }, createRandomUser);
