import styles from './page.module.css'
import Hero from './components/Hero'
import Upcoming from './components/Upcoming'

export default function Home() {
  return (
		<main className={styles.main}>
		  <Hero />
		  <Upcoming />
		</main>
	)
}
