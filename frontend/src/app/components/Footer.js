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
				<h3>sIGN // uP // fOR // oUR // nEWSLETTER</h3>
				{!submitted ? (
					<form className={styles.news} onSubmit={() => setSubmitted(true)}>
						<input type='email' placeholder='EMAIL'></input>
						<button>sIGN // uP</button>
					</form>
				) : (
					<p>Thanks for signing up!</p>
				)}
			</div>
			<div className={styles.mid}>
				<div className={styles.col}>
					<div className={styles.address}>
						<h3>lOCATION</h3>
						<p>123 Address Lane</p>
						<p>Salt Lake City, Utah 12345</p>
					</div>
					<div className={styles.hello}>
						<h3>sAY // hELLO</h3>
						<p>Email: info@address.com</p>
						<p>Phone: 123.456.7890</p>
					</div>
				</div>
				<div className={styles.col}>
					<h3>oUR // tEAM</h3>
					<span>Coaches</span>
					<span>League Rankings</span>
					<span>Match History</span>
				</div>
				<div className={styles.col}>
					<h3>rESOURCES</h3>
					<span>Corporate Careers</span>
					<span>Join Our Team</span>
					<span>Privacy Policy</span>
					<span>Terms & Conditions</span>
				</div>
				<div className={styles.col}>
					<h3>sOCIALS</h3>
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
				<p>&copy; {new Date().getFullYear()} TOP // FRAGGERS</p>
			</div>
		</main>
	)
}
