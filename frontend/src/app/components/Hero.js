'use client'

import React from 'react'
import styles from '../styles/Hero.module.css'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Hero() {
   const [heroNum, setHeroNum] = useState(1)
   useEffect(() => {
      setTimeout(() => {
         if (heroNum == 1) {
            setHeroNum(2)
         } else if (heroNum == 2) {
            setHeroNum(3)
         } else if (heroNum == 3) {
            setHeroNum(1)
         }
      }, 7000);
   }, [heroNum])
  return (
		<div className={styles.main}>
			{heroNum == 1 && (
				<>
					<div className={styles.top}>
						<div>
							<h1>#1 <span className={styles.slashes}>//</span> rANKED</h1>
							<h1>tEAM <span className={styles.slashes}>//</span> iN</h1>
							<h1>tHE <span className={styles.slashes}>//</span> U.S.</h1>
						</div>
						<Image alt='img' src={'/home_img.png'} width={500} height={500} />
					</div>
					<div className={styles.bottom}>
						<p>mEET <span className={styles.slashes}>//</span> oUR <span className={styles.slashes}>//</span> tEAM</p>
					</div>
				</>
			)}
			{heroNum == 2 && (
				<>
					<div className={styles.top}>
						<div>
							<h1>aLL <span className={styles.slashes}>//</span> oF <span className={styles.slashes}>//</span> oUR</h1>
							<h1>cOACHES <span className={styles.slashes}>//</span> aRE</h1>
							<h1>rADIANT</h1>
						</div>
						<Image alt='img' src={'/Radiant_Rank.png'} width={500} height={500} />
					</div>
					<div className={styles.bottom}>
						<p>mEET <span className={styles.slashes}>//</span> oUR <span className={styles.slashes}>//</span> cOACHES</p>
					</div>
				</>
			)}
			{heroNum == 3 && (
				<>
					<div className={styles.top}>
						<div>
							<h1>rANKED <span className={styles.slashes}>//</span> 1sT</h1>
							<h1>iN <span className={styles.slashes}>//</span> tHREE</h1>
							<h1>tOURNAMENTS</h1>
						</div>
						<Image alt='img' src={'/tournament.png'} width={500} height={500} />
					</div>
					<div className={styles.bottom}>
						<p>vIEW <span className={styles.slashes}>//</span> oUR <span className={styles.slashes}>//</span> hISTORY</p>
					</div>
				</>
			)}
		</div>
	)
}
