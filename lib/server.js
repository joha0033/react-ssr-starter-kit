import express from 'express'
import config from './config'
import serverRender from './renderers/server'
import { data } from 'data'
import bodyParser from 'body-parser'
import {renderFullPage} from '../views'

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())


app.get('/', async (req, res) => {
  const {html, preloadedState} = await serverRender()
  
  res.send(renderFullPage(html, preloadedState))
})

app.get('/data', (req, res) => {
  res.send(data)
})

app.listen(config.port, () => {
  console.info(`listening on port ${config.port}...`)
}) 