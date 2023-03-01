import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { RiSearch2Line, RiEmotionUnhappyLine } from 'react-icons/ri'
import { fetchPosts } from '@/service/apis'
import { PostList } from '@/components'
import { siteName } from '@/constants/config'

const SearchPage = ({ searchResult, searchParams, page }) => {
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)
  const [keyword, setKeyword] = useState('')
  useEffect(() => {
    setIsMounted(true)
  }, [])
  if (!isMounted) return null

  const handleSubmit = e => {
    e.preventDefault()
    if (keyword === '') return
    if (e.keyCode === 13 || keyword.toString().length > 0) {
      router.push(`?keywords=${keyword.toString().trim()}`)
    }
  }

  return (
    <>
      <Head>
        <title>Search | {siteName}</title>
      </Head>
      <div className='page-main flex flex-col gap-20'>
        <form
          className='w-full h-12 bg-gray-50 dark:bg-gray-900 rounded-full flex justify-between items-center gap-2 border border-transparent hover:border-gray-200 dark:hover:border-gray-700'
          onSubmit={handleSubmit}
        >
          <input
            type='text'
            name='search'
            placeholder='Please enter keywords'
            className='flex-1 h-full outline-none border-0 rounded-l-full bg-transparent pl-4'
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
          />
          <button
            type='submit'
            className='w-16 h-full flex justify-center items-center text-xl text-gray-500 hover:text-gray-800'
          >
            <RiSearch2Line />
          </button>
        </form>

        {searchParams && searchResult.items.length == 0 && (
          <div className='flex flex-col md:flex-row justify-center items-center gap-2 p-6 text-lg text-gray-500 border border-gray-200 rounded-md bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100'>
            <RiEmotionUnhappyLine size={24} />
            <span className=''>
              Sorry~, no
              <span className='text-red-500 dark:text-red-400'>
                {searchParams}
              </span>
              posts were found!
            </span>
          </div>
        )}

        {searchParams && searchResult.items.length > 0 && (
          <div className='page-block'>
            <div className='flex flex-col md:flex-row justify-start items-center gap-6 h-auto md:h-12 mb-6'>
              <h2 className='text-xl text-gray-800 dark:text-white font-semibold'>
                Search Result
              </h2>
              <div className='flex-1 flex justify-end items-center h-full text-gray-500'>
                keywords:
                <span className='text-red-500 dark:text-red-400'>
                  {searchParams}
                </span>
                , {searchResult.items.length} post
                {searchResult.items.length > 1 ? 's' : null} found
              </div>
            </div>
            <PostList data={searchResult} page={page} />
          </div>
        )}
      </div>
    </>
  )
}

export const getServerSideProps = async ({ query: { keywords, page = 1 } }) => {
  const searchParams =
    keywords === undefined || keywords === '' ? null : keywords.toString()
  const pageParam = +page === undefined || +page === 1 ? 1 : +page
  const searchResult = await fetchPosts(
    pageParam,
    `(content ~ '${searchParams}')`
  )
  return {
    props: { searchResult, searchParams, page: +page },
  }
}

export default SearchPage
