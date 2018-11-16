import express from 'express'
import config from './config'
import serverRender from './renderers/server'
import { data } from 'data'
import bodyParser from 'body-parser'
import { renderFullPage } from '../views'
import fs from 'fs'
import path from 'path'

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', async (req, res) => {
  const {html, preloadedState} = await serverRender()
  
  res.send(renderFullPage(html, preloadedState))
})

 
app.get('/data', (req, res) => {
  // create controllers when more routeds available
  const mapIntoObject = (arr) => {
    return arr.reduce((acc, cur) => {
      acc[cur._id] = cur
      return acc
    }, {})
  }

  let resp = {} 
  Object.keys(data).forEach((key) => {
    const array = data[key]
    let obj = mapIntoObject(array)
    resp = {
      ...resp,
      [key]: obj
    }
  })
  
  res.send(resp)
})
app.get('/favicon.ico', (req, res) => {
  let icon = fs.readFile(path.join(__dirname, 'assets', 'favicon.ico'), (err) => {
    if(err) throw err
  })
  
  res.send(icon)
})

app.listen(config.port, () => {
  console.info(`listening on port ${config.port}...`)
})