import { Categories } from '@/components'

const Titlebar = ({ title, categories, categoryId }) => {
  return (
    <div className='w-full h-auto md:h-12 mb-6 flex flex-col md:flex-row justify-between items-center gap-6'>
      <h2 className='text-xl text-gray-800 font-semibold dark:text-white'>
        {title}
      </h2>
      <Categories categories={categories} categoryId={categoryId} />
    </div>
  )
}

export default Titlebar
