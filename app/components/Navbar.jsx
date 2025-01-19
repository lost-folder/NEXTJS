import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './dojo-logo.png'
import LogoutButton from './LogoutButton'

const Navbar = ({user}) => {

  return (
    <nav>
    <Image
        src={Logo}
        alt="Dojo help pic"
        width={70}
        quality={100}
        placeholder="blur"
    />
        <h1>Dojo help desk</h1>
        <Link href="/">
          Dashboard
        </Link>
        <Link href="/tickets" className='mr-auto'>
          tickets
        </Link>
        {user && <span>Hello, {user.email}</span> }
        <LogoutButton />
      </nav>

  )
}

export default Navbar