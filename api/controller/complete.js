const { loadSentence } = require('../service/load')
const searchInstance = require('../service/search')

function load(req, res, next) {
  try {
    const { num } = req.query
    res.send('success')
    loadSentence(num)
    console.log('finish')
  } catch (error) {
    console.log(error)
    next(error)
  }
}

function search(req, res, next) {
  try {
    const { type, q } = req.query
    const decodedQ = decodeURI(q)

    let result
    if (type === 'array') {
      result = searchInstance.searchByArray(decodedQ)
    } else if (type === 'trie') {
      result = searchInstance.searchByTrie(decodedQ)
    } else {
      throw new Error('invalid search type')
    }

    res.send({ result })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

module.exports = { search, load }
