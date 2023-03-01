import { fetchList, fetchView } from '@/service/pbApi'
import { featureLimit, pageLimit, authorId } from '@/constants/config'

export const fetchFeaturePosts = async () =>
  await fetchList('posts', 1, featureLimit, {
    sort: '-created',
    expand: 'category',
    filter: 'isFeature = true',
  })

export const fetchPosts = async (page, filter = '') =>
  await fetchList('posts', page, pageLimit, {
    sort: '-created',
    expand: 'category',
    filter,
  })

export const fetchPost = async id =>
  await fetchView('posts', id, {
    expand: 'category',
  })

export const fetchCategories = async () => await fetchList('categories', 1, 20)

export const fetchAuthor = async () => await fetchView('users', authorId)
