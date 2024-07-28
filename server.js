const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const initializeDatabase = require('./db')
const createTransactionTable = require('./models/transaction')

const app = express()
app.use(bodyParser.json())
app.use(cors())

async function initialize() {
  await createTransactionTable()
  const db = await initializeDatabase()

  app.get('/transactions', async (req, res) => {
    const transactions = await db.all(
      'SELECT * FROM transactions ORDER BY date DESC',
    )
    res.json(transactions)
  })

  
  app.listen(3000, () => {
    console.log('Server is running on port 3000')
  })
}

initialize()
