import React from 'react'
import styles from '../styles/Upcoming.module.css'

export default function Upcoming() {
  return (
		<main className={styles.main}>
			<h2>uPCOMING // MATCHES</h2>
			<div className={styles.matches}>
				<div className={styles.match}>
					<span>AUG 5</span>
					<span>VS</span>
					<span>Moist Moguls</span>
				</div>
				<div className={styles.match}>
					<span>AUG 12</span>
					<span>VS</span>
					<span>Acend</span>
				</div>
				<div className={styles.match}>
					<span>AUG 19</span>
					<span>VS</span>
					<span>M80</span>
				</div>
				<div className={styles.match}>
					<span>AUG 26</span>
					<span>VS</span>
					<span>Cloud9</span>
				</div>
				<div className={styles.match}>
					<span>SEP 2</span>
					<span>VS</span>
					<span>Team Liquid</span>
				</div>
			</div>
		</main>
	)
}
