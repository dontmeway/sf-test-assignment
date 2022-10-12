import { faker } from '@faker-js/faker/locale/ru'

export const data = Array.from({ length: 5 }, () => {
  return {
    title: faker.address.cityName(),
    jan: faker.random.numeric(getRndInteger(2, 4)),
    feb: faker.random.numeric(getRndInteger(2, 4)),
    mar: faker.random.numeric(getRndInteger(2, 4)),
    apr: faker.random.numeric(getRndInteger(2, 4)),
    may: faker.random.numeric(getRndInteger(2, 4)),
    jun: faker.random.numeric(getRndInteger(2, 4)),
    jul: faker.random.numeric(getRndInteger(2, 4)),
    aug: faker.random.numeric(getRndInteger(2, 4)),
    sep: faker.random.numeric(getRndInteger(2, 4)),
    oct: faker.random.numeric(getRndInteger(2, 4)),
    nov: faker.random.numeric(getRndInteger(2, 4)),
    dec: faker.random.numeric(getRndInteger(2, 4)),
  }
})

function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
