import Head from 'next/head'
import { PostList } from '@/components'
import { fetchFeaturePosts } from '@/service/apis'
import { siteName } from '@/constants/config'

const Home = ({ featurePosts }) => {
  return (
    <>
      <Head>
        <title>Home | {siteName}</title>
      </Head>
      <div className='page-main'>
        <PostList data={featurePosts} />
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const featurePosts = await fetchFeaturePosts()
  return {
    props: { featurePosts },
  }
}

export default Home
