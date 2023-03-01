import { PostItem, Pagination } from '@/components'

const PostList = ({ data, page }) => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-6'>
        {data?.items?.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
      {data.totalPages > 1 && (
        <Pagination page={page} totalPages={data.totalPages} />
      )}
    </div>
  )
}

export default PostList
