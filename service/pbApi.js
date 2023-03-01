import fetcher from '@/service/fetcher'

export const fetchList = async (collection, page, perPage, options) => {
  const response = await fetcher({
    url: `/${collection}/records`,
    params: {
      page,
      perPage,
      ...options,
    },
  })
  return response
}

export const fetchView = async (collection, id, options) => {
  const response = await fetcher({
    url: `/${collection}/records/${id}`,
    params: { ...options },
  })
  return response
}
