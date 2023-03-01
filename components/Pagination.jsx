import { useRouter } from 'next/router'
import cx from 'clsx'
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'

const Pagination = ({ page, totalPages }) => {
  const router = useRouter()

  const [id, slug] =
    router.query.param !== undefined ? router.query.param : ['', '']

  const handlePrevPage = () => {
    if (id && slug) {
      router.push(`/post/category/${id}/${slug}?page=${+page - 1}`)
    } else {
      router.push(`/post?page=${+page - 1}`)
    }
  }
  const handleNextPage = () => {
    if (id && slug) {
      router.push(`/post/category/${id}/${slug}?page=${+page + 1}`)
    } else {
      router.push(`/post?page=${+page + 1}`)
    }
  }
  return (
    <div
      className={cx(
        'justify-between items-center flex-col md:flex-row mt-6 w-full h-auto md:h-10',
        {
          hidden: page === undefined,
          flex: page >= 1,
        }
      )}
    >
      {page && (
        <div className='text text-gray-500 mb-6 md:mb-0'>
          Page {page} of {totalPages}
        </div>
      )}
      <div className='flex justify-end items-center gap-6 h-full'>
        {page > 1 && (
          <button
            className='flex justify-center items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-500 text-white rounded dark:bg-gray-900 dark:hover:bg-gray-700'
            onClick={handlePrevPage}
          >
            <TbChevronLeft />
            上一页
          </button>
        )}
        {page < totalPages && (
          <button
            className='flex justify-center items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-500 text-white rounded dark:bg-gray-900 dark:hover:bg-gray-700'
            onClick={handleNextPage}
          >
            下一页 <TbChevronRight />
          </button>
        )}
      </div>
    </div>
  )
}

export default Pagination
