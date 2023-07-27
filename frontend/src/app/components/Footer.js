'use client'

import React from 'react'
import styles from '../styles/Footer.module.css'
import { useState } from 'react'
import Image from 'next/image'

export default function Footer() {
	const [submitted, setSubmitted] = useState(false)
	return (
		<main className={styles.main}>
			<div className={styles.top}>
				<h3>sIGN <span className={styles.slashes}>//</span> uP <span className={styles.slashes}>//</span> fOR <span className={styles.slashes}>//</span> oUR <span className={styles.slashes}>//</span> nEWSLETTER</h3>
				{!submitted ? (
					<form className={styles.news} onSubmit={() => setSubmitted(true)}>
						<input type='email' placeholder='EMAIL' required></input>
						<button>sIGN <span className={styles.slashes}>//</span> uP</button>
					</form>
				) : (
					<p>Thanks for signing up!</p>
				)}
			</div>
			<div className={styles.mid}>
				<div className={styles.col}>
					<div className={styles.address}>
						<h4>lOCATION</h4>
						<p>123 Address Lane</p>
						<p>Salt Lake City, Utah 12345</p>
					</div>
					<div className={styles.hello}>
						<h4>sAY <span className={styles.slashes}>//</span> hELLO</h4>
						<p>Email: info@address.com</p>
						<p>Phone: 123.456.7890</p>
					</div>
				</div>
				<div className={styles.col}>
					<h4>oUR <span className={styles.slashes}>//</span> tEAM</h4>
					<span>Coaches</span>
					<span>League Rankings</span>
					<span>Match History</span>
				</div>
				<div className={styles.col}>
					<h4>rESOURCES</h4>
					<span>Corporate Careers</span>
					<span>Join Our Team</span>
					<span>Privacy Policy</span>
					<span>Terms & Conditions</span>
				</div>
				<div className={styles.col}>
					<h4>sOCIALS</h4>
					<div>
						<Image alt='icon' src={'/facebook.svg'} width={50} height={50} />
						<Image alt='icon' src={'/instagram.svg'} width={50} height={50} />
					</div>
					<div>
						<Image alt='icon' src={'/tiktok.svg'} width={50} height={50} />
						<Image alt='icon' src={'/youtube.svg'} width={50} height={50} />
					</div>
				</div>
			</div>
			<div className={styles.bottom}>
				<p>&copy; {new Date().getFullYear()} TOP <span className={styles.slashes}>//</span> FRAGGERS</p>
			</div>
		</main>
	)
}
