const faker = require('faker')

// console.log(faker.lorem.sentence())
// console.log(faker.lorem.sentences())
// console.log(faker.lorem.word())
console.log(faker.lorem.words())
console.log(faker.lorem.words())
console.log(faker.lorem.words())
console.log(faker.lorem.words(1))

function seed() {
  for (let i = 0; i < 500000; i++) {
    const num = getRandomNumber()
    console.log(faker.lorem.sentence())
  }
}
seed()

function getRandomNumber() {
  return Math.ceil(Math.random() * 10)
}
