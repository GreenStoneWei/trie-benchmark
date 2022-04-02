const faker = require('faker')

function seed() {
  for (let i = 0; i < 500000; i++) {
    console.log(faker.lorem.sentence())
  }
}
seed()
