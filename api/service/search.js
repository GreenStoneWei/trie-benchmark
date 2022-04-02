const Trie = require('./trie')

class Search {
  constructor() {
    this.trie = new Trie()
    this.array = []
  }

  searchByTrie(input) {
    return this.trie.collections(input)
  }

  searchByArray(input) {
    return this.array.filter((e) => e.startsWith(input))
  }

  resetTrie() {
    this.trie = new Trie()
  }
}

module.exports = new Search()
