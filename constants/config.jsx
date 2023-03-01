import PocketBase from 'pocketbase'

export const siteName = 'Sim.z'
export const authorId = process.env.NEXT_PUBLIC_AUTHOR_ID
export const pocketbaseApiUrl = process.env.NEXT_PUBLIC_POCKETBASE_API_URL

export const pb = new PocketBase(pocketbaseApiUrl)
export const isValid = pb.authStore.isValid

export const featureLimit = 5
export const pageLimit = 3

export const headerNavs = [
  { name: 'Home', route: '/' },
  { name: 'Post', route: '/post' },
  { name: 'About', route: '/about' },
]
