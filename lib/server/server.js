import express from 'express'
import config from '../config'
import serverRender from '../renderers/server'
import bodyParser from 'body-parser'
import { renderFullPage } from '../../views'
import fs from 'fs'
import path from 'path'
// npm install --save helmet // for header secrrrity

// app init
const app = express()

// middleware
app.use(express.static('public'))
app.use(bodyParser.json())


// routes
app.use('/api/v1/posts', require('./routes/posts'))

app.get('/', async (req, res) => {
  const {html, preloadedState} = await serverRender()
  res.send(renderFullPage(html, preloadedState))
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

// error handling functions
const logErrors = (err, req, res, next) => {
  console.error(err.stack)
  next(err)
}

const clientErrorHandler = (err, req, res, next) => {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' })
  } else {
    next(err)
  }
}

const errorHandler = (err, req, res, next) => {
  res.status(500)
  res.render('error', { error: err })
}

app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)