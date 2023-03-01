import Link from 'next/link'
import cx from 'clsx'

const Categories = ({ categories, categoryId }) => {
  const currentCategory = categoryId !== undefined ? categoryId : ''
  return (
    <nav className='flex-1 flex justify-center md:justify-end items-center gap-2 md:gap-4 flex-wrap h-full text-gray-500 text-sm'>
      <Link
        href='/post'
        className={cx(
          'px-2 py-1 bg-gray-200 rounded hover:bg-gray-500 hover:text-white dark:bg-gray-900 dark:hover:bg-gray-700',
          {
            'bg-gray-800 text-white dark:bg-gray-700': currentCategory === '',
          }
        )}
      >
        全部
      </Link>
      {categories?.items?.map(category => (
        <Link
          key={category.id}
          href={`/post/category/${category.id}/${category.slug}`}
          className={cx(
            'px-2 py-1 bg-gray-200 rounded hover:bg-gray-500 hover:text-white dark:bg-gray-900 dark:hover:bg-gray-700',
            {
              'bg-gray-800 text-white dark:bg-gray-700':
                currentCategory === category.id,
            }
          )}
        >
          {category.name}
        </Link>
      ))}
    </nav>
  )
}

export default Categories
