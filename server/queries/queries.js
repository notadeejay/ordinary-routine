const Pool = require('pg').Pool
const pool = new Pool({
  user: 'amymansell',
  host: 'localhost',
  database: 'the_ordinary',
  password: 'password',
  port: 5432,
})


const getProducts = (request, response) => {
    pool.query('SELECT * FROM product', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
      console.log(result)
    })
  }

module.exports = {
    getProducts
}