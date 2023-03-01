import pbApi from '@/service/pbApi'
import { featureLimit, pageLimit, authorId } from '@/constants/config'

const fetchFeaturePosts = async () =>
  await pbApi.fetchList('posts', 1, featureLimit, {
    sort: '-created',
    expand: 'category',
    filter: 'isFeature = true',
  })

const fetchPosts = async (page, filter = '') =>
  await pbApi.fetchList('posts', page, pageLimit, {
    sort: '-created',
    expand: 'category',
    filter,
  })

const fetchPost = async id =>
  await pbApi.fetchView('posts', id, {
    expand: 'category',
  })

const fetchCategories = async () => await pbApi.fetchList('categories', 1, 20)

const fetchAuthor = async () => await pbApi.fetchView('users', authorId)

export default {
  fetchFeaturePosts,
  fetchPosts,
  fetchPost,
  fetchCategories,
  fetchAuthor,
}
