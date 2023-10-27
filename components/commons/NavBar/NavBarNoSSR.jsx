import dynamic from 'next/dynamic'

const NavbarWithNoSSR = dynamic(() => import('./index'), {
    ssr: false
})

export default NavbarWithNoSSR