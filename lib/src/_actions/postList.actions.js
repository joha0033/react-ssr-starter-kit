/**
 * Module Dependencies
 * ------------------
 */
import config from '../../config'
import axios from 'axios'

/**
 * Action Creators
 * --------------
 */
import { 
  fetchingPosts,
  postFetchSuccess,
  postFetchFailure 
} from '../_constants'

/**
 * Data for Fetching Posts
 * ----------------------
 */
const fetchData = {
  success: true,
  URL: `http://${config.host}:${config.port}/api/v1/posts/data`
}


/**
 * Fetching Posts function
 * ----------------------
 */
const fetchPosts = () => ((dispatch) => {
  dispatch(fetchingPosts())
  return axios.get(fetchData.URL)
    .then((res) => res.data)
    .then((data) => {
      dispatch(postFetchSuccess(data))
    }).catch((error) => dispatch(postFetchFailure(error)))
})

/**
 * Export Fetching Posts
 * ---------------------
 */
export const postListActions = {
  fetchPosts
}
