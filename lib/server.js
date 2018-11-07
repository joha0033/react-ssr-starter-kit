import express from 'express'
import config from './config'
import serverRender from './renderers/server'
import { data } from 'data'

import {renderFullPage} from '../views'
// import store from './src/store'
// redux docs
// import path from 'path'


const app = express()

app.use(express.static('public'))

app.get('/', async (req, res) => {
  const initialContent = await serverRender()
  res.send(renderFullPage(initialContent))
})
console.log(process.env.NODE_ENV)

app.get('/data', (req, res) => {
  res.send(data)
})

app.listen(config.port, () => {
  console.info(`listening on port ${config.port}...`)
}) 