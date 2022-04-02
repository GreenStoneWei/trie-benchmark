const path = require('path')
const fs = require('fs')
const search = require('./search')

function loadSentence(num) {
  if (!['100', '1000', '10000', '50000', '100000', '200000', '500000', '1000000'].includes(num)) {
    throw new Error('invalid dictionary')
  }
  const file = fs.readFileSync(path.join(__dirname, `../../collections/${num}.txt`))
  const dictionayArray = file.toString().split('\n')
  search.array = dictionayArray

  search.resetTrie()
  for (let i = 0; i < dictionayArray.length; i++) {
    search.trie.insert(dictionayArray[i])
  }
}

module.exports = { loadSentence }
