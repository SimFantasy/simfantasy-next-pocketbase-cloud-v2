import Head from 'next/head'
import { fetchPosts, fetchCategories } from '@/service/apis'
import { Titlebar, PostList } from '@/components'
import { siteName } from '@/constants/config'

const PostsPage = ({ posts, page, categories }) => {
  return (
    <>
      <Head>
        <title>Post | {siteName}</title>
      </Head>
      <div className='page-main'>
        <Titlebar title='Posts' categories={categories} />
        <PostList data={posts} page={page} />
      </div>
    </>
  )
}

export const getServerSideProps = async ({ query: { page = 1 } }) => {
  const pageParam = +page === undefined || +page === 1 ? 1 : +page
  const posts = await fetchPosts(pageParam)
  const categories = await fetchCategories()
  return {
    props: { posts, page: +page, categories },
  }
}

export default PostsPage
