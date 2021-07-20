const { Pool } = require('pg')
const config = require('../config')
const pool = new Pool(config.db)
/**
 * Query the database using the pool
 * @param {*} query
 * @param {*} params
 *
 * @see https://node-postgres.com/features/pooling#single-query
 */
async function query(query) {
  const { rows, fields } = await pool.query(query)
  return rows
}

const getSchedule = (request, response) => {
  pool.query('select * from schedule', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  query,
}
