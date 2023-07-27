import React from 'react'
import styles from '../styles/Who.module.css'
import Image from 'next/image'

export default function Who() {
  return (
		<main className={styles.main}>
			<h2>
				wHO <span className={styles.slashes}>//</span> aRE <span className={styles.slashes}>//</span> wE?
			</h2>
			<p>
				TOP <span className={styles.slashes}>//</span> FRAGGERS was started in the year 2020. Since then, we&apos;ve managed to win 3 national championships. With all of our starting players and coaches at the radiant level, we&apos;ve been able to dominate the league.
			</p>
			<div className={styles.images}>
				<div className={styles.image}>
					<Image alt='img' src={'/image-2.jpg'} fill />
				</div>
				<div className={styles.image}>
					<Image alt='img' src={'/image-1.jpeg'} fill />
				</div>
				<div className={styles.image}>
					<Image alt='img' src={'/image-3.jpg'} fill />
				</div>
			</div>
		</main>
	)
}
