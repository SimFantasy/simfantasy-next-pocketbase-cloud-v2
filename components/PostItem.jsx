import Link from 'next/link'
import Image from 'next/image'
import { RiCalendar2Line, RiFolder3Line } from 'react-icons/ri'
import { dateNowFormat } from '@/utils'

const PostItem = ({
  title,
  id,
  slug,
  created,
  description,
  showCoverImage,
  coverImage,
  expand: { category },
}) => {
  return (
    <div className='p-6 bg-white rounded flex flex-col dark:bg-gray-900 hover:shadow-lg dark:hover:shadow-none'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
        {coverImage && showCoverImage && (
          <Link
            href={`/post/${id}/${slug}`}
            className='max-w-[320px] max-h-[180px] overflow-hidden rounded-md'
          >
            <Image
              src={coverImage}
              width={480}
              height={320}
              alt={title}
              className='w-full md:w-auto h-auto rounded-md object-cover object-center'
              priority
            />
          </Link>
        )}
        <div className='flex-1 flex flex-col'>
          <Link
            href={`/post/${id}/${slug}`}
            className=' flex justify-start h-full text-xl text-gray-800 line-clamp-2 hover:text-gray-500 dark:text-gray-100'
          >
            {title}
          </Link>
          <div className='flex justify-start items-center gap-6 my-2 text-sm text-gray-400'>
            <div className='flex justify-start items-center gap-2 h-full'>
              <RiCalendar2Line /> {dateNowFormat(created)}
            </div>
            <div className='flex justify-start items-center gap-2 h-full'>
              <RiFolder3Line />
              <Link
                href={`/post/category/${category.id}/${category.slug}`}
                className='hover:text-gray-800'
              >
                {category.name}
              </Link>
            </div>
          </div>
          <article className='text-md text-gray-500 leading-8 line-clamp-3'>
            {description}
          </article>
        </div>
      </div>
    </div>
  )
}

export default PostItem
