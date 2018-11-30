import express from 'express'
import { postController } from '../controllers/posts.controller'

const router = express.Router()

router.route('/data').get(postController.getPosts)

module.exports = router