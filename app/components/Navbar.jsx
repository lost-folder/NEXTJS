import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './dojo-logo.png'
const Navbar = () => {
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
        <Link href="/tickets">
          tickets
        </Link>
      </nav>

  )
}

export default Navbar