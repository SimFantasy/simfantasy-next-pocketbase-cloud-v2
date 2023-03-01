import Head from 'next/head'
import { fetchPosts, fetchCategories } from '@/service/apis'
import { Titlebar, PostList } from '@/components'
import { siteName } from '@/constants/config'

const PostsCategoryPage = ({ posts, page, categories, id }) => {
  const currentCategory = categories.items.find(cate => cate.id === id)?.name

  return (
    <>
      <Head>
        <title>
          {currentCategory} - Post | {siteName}
        </title>
      </Head>
      <div className='page-main'>
        <Titlebar title='Posts' categories={categories} categoryId={id} />
        <PostList data={posts} page={page} />
      </div>
    </>
  )
}

export const getServerSideProps = async ({ query: { page = 1, param } }) => {
  const pageParam = +page === undefined || +page === 1 ? 1 : +page
  const [id, slug] = param
  const posts = await fetchPosts(pageParam, `category = '${id}'`)
  const categories = await fetchCategories()
  return {
    props: { posts, page: +page, categories, id },
  }
}

export default PostsCategoryPage
