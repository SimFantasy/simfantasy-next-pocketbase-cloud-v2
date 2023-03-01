import Head from 'next/head'
import { PostList } from '@/components'
import fantasyApi from '@/service/apis'
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
  const featurePosts = await fantasyApi.fetchFeaturePosts()
  return {
    props: { featurePosts },
  }
}

export default Home
