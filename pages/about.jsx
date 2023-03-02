import Image from 'next/image'
import Head from 'next/head'
import { RiUserLine, RiChat3Line } from 'react-icons/ri'
import { fetchAuthor } from '@/service/apis'
import { imageUrl } from '@/utils'
import { MarkdownContent } from '@/components'
import { siteName } from '@/constants/config'

const AboutPage = ({ author }) => {
  const { name, handImage, bio, content, title } = author
  const avatarImage = imageUrl('users', handImage)

  return (
    <>
      <Head>
        <title>About | {siteName}</title>
      </Head>
      <div className='page-main flex flex-col'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6 p-6 bg-gray-50 dark:bg-gray-900 rounded-md'>
          <div className='w-20 h-20 p-2 bg-gray-300 dark:bg-gray-700 rounded-full group'>
            <Image
              src={avatarImage}
              alt={name}
              width={60}
              height={60}
              className='w-full h-auto rounded-full group-hover:animate-spin cursor-pointer'
            />
          </div>
          <div className='flex-1 flex flex-col gap-1 items-start text-sm'>
            <h2 className='text-2xl text-gray-800 dark:text-white font-semibold w-full md:w-auto flex justify-center items-center'>
              {name}
            </h2>
            <div className='text-gray-500 flex justify-start items-center h-full gap-2'>
              <RiUserLine />
              {title}
            </div>
            <div className='text-gray-400 dark:text-gray-700 flex justify-start items-center h-full gap-2'>
              <RiChat3Line />
              {bio}
            </div>
          </div>
        </div>
        <article className='mt-12 text-lg'>
          <MarkdownContent source={content} />
        </article>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const author = await fetchAuthor()

  return {
    props: { author },
    revalidate: 10,
  }
}

export default AboutPage
