import Link from 'next/link'
import { useRouter } from 'next/router'
import cx from 'clsx'
import { headerNavs } from '@/constants/config'

const Navbar = ({ click }) => {
  const router = useRouter()
  const routerPath = route => {
    const routerArr = router.pathname.split('/')
    const routeArr = route.split('/')[1]
    if (router.asPath === route) {
      return true
    } else if (routerArr.indexOf(routeArr) > 0) {
      return true
    } else {
      return false
    }
  }
  return (
    <>
      {headerNavs?.map(nav => (
        <Link
          href={nav.route}
          key={nav.route}
          className={cx('hover:text-gray-800 dark:hover:text-gray-300', {
            'text-gray-800 dark:text-white': routerPath(nav.route),
          })}
          onClick={click}
        >
          {nav.name}
        </Link>
      ))}
    </>
  )
}

export default Navbar
