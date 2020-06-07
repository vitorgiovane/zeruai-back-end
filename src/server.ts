import express from 'express'
import 'express-async-errors'

const app = express()

app.use(express.json())

app.listen(3333, () => {
  console.log('🚀️ the server has started...')
})
