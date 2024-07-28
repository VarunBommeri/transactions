// models/transaction.js
const initializeDatabase = require('../db')

async function createTransactionTable() {
  const db = await initializeDatabase()
  await db.exec(`
    CREATE TABLE IF NOT EXISTS transactions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT NOT NULL,
      description TEXT NOT NULL,
      amount REAL NOT NULL,
      type TEXT NOT NULL CHECK(type IN ('credit', 'debit')),
      balance REAL NOT NULL
    )
  `)
}

module.exports = createTransactionTable
