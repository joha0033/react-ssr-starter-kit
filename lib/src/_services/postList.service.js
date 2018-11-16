import config from '../../config'
import axios from 'axios'

const URL = `http://${config.host}:${config.port}/data`

const fetchPosts = () => axios.get(URL)
  .then((res) => res.data)
  .catch((err) => err.status)


export const postListService = {
  fetchPosts,
}