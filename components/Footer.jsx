import { siteName } from '@/constants/config'

const Footer = () => {
  return (
    <div className='w-screen h-14'>
      <div className='container flex justify-between items-center h-full text-sm text-gray-400'>
        <div>© 2023 {siteName}</div>
        <div>Powered by: Sim</div>
      </div>
    </div>
  )
}

export default Footer
