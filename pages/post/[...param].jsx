import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { RiCalendar2Line, RiFolder3Line } from 'react-icons/ri'
import { fetchPosts, fetchPost } from '@/service/apis'
import { MarkdownContent } from '@/components'
import { fullDateFormat, serializationString } from '@/utils'
import { siteName } from '@/constants/config'

const PostPage = ({ post }) => {
  const {
    title,
    coverImage,
    created,
    content,
    tags,
    expand: { category },
  } = post
  return (
    <>
      <Head>
        <title>
          {title} - {category.name} | {siteName}
        </title>
      </Head>
      <div className='page-main flex flex-col'>
        <div className='w-full max-h-[320px] rounded-md overflow-hidden mb-10'>
          <Image
            src={coverImage}
            alt={title}
            width={768}
            height={430}
            priority
            className='w-full h-auto object-contain object-center rounded-md'
          />
        </div>
        <h2 className='text-xl text-gray-800 dark:text-white font-semibold'>
          {title}
        </h2>
        <div className='pt-3 pb-4 flex justify-start items-center gap-6 text-gray-400 text-sm'>
          <div className='flex justify-start items-center gap-2 h-full'>
            <RiCalendar2Line /> {fullDateFormat(created)}
          </div>
          <div className='flex justify-start items-center gap-2 h-full'>
            <RiFolder3Line />{' '}
            <Link
              href={`/post/category/${category.id}/${category.slug}`}
              className='hover:text-gray-800'
            >
              {category.name}
            </Link>
          </div>
        </div>
        <article className='text-lg leading-8'>
          <MarkdownContent source={content} />
        </article>
        <div className='divider-line'></div>
        <div className='flex justify-start items-center gap-4 h-10 mt-6 text-gray-500'>
          {serializationString(tags).map((tag, index) => (
            <Link
              href={`/search?keywords=${tag}`}
              key={index}
              className='px-2 py-1 bg-gray-300 rounded text-sm dark:bg-gray-900 dark:text-gray-300'
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  const posts = await fetchPosts(1)
  const paths = posts.items.map(post => ({
    params: { param: [post.id.toString(), post.slug] },
  }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params: { param } }) => {
  const [id, slug] = param
  const post = await fetchPost(id)
  return {
    props: { post },
  }
}

export default PostPage
