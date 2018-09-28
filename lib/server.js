import express from 'express'
import config from './config'
import serverRender from './renderers/server'
import { data } from 'data'

import {renderFullPage} from '../views'
import store from './src/store'
// redux docs
// import path from 'path'


const app = express()

app.use(express.static('public'))

// app.set('view engine', 'ejs')

// app.get('/', async (req, res) => {
//   const initialContent = await serverRender()
//   res.render('index', { ...initialContent })
// })

app.get('/', async (req, res) => {
  const initialContent = await serverRender()
  res.send(renderFullPage(initialContent))
})

app.get('/data', (req, res) => {
  res.send(data)
})


// redux docs
// function handleRender(req, res) { /* ... */ }
// function renderFullPage(html, preloadedState) { /* ... */ }

app.listen(config.port, () => {
  console.info(`listening on port ${config.port}...`)
}) 