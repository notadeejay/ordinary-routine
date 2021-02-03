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
      console.log(results)
    })
  }

  const getCategories = (request, response) => {
    pool.query('SELECT c.category_name, p.name FROM product p JOIN category c ON p.category = c.id;', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
      console.log(results)
    })
  }

module.exports = {
    getProducts,
    getCategories
}