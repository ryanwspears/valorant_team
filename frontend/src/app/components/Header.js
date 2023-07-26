import React from 'react'
import styles from '../styles/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
		<main className={styles.main}>
			<Link href={'/'}>
				<Image alt='logo' src={'/logo.png'} width={400} height={90} />
			</Link>
			<div className={styles.nav}>
				<Link href={'/'}>hOME</Link>
				<Link href={'/team'}>tEAM</Link>
				<Link href={'/contact'}>cONTACT</Link>
			</div>
		</main>
	)
}
