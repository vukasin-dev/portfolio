import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>vukasin.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Vukasin Igic
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>Fullstack Javascript Developer</code>
        </p>

        <div className={styles.grid}>
          <a href="/projects" className={styles.card}>
            <h3>Projects &rarr;</h3>
            <p>Checkout my projects and technologies I used.</p>
          </a>

          <a href="/about" className={styles.card}>
            <h3>About &rarr;</h3>
            <p>My skills, prefered technologies and a little bit of background.</p>
          </a>

          <a
            href="/contact"
            className={styles.card}
          >
            <h3>Contact &rarr;</h3>
            <p>Like what you see? Contant me here.</p>
          </a>

          <a
            href="/social"
            className={styles.card}
          >
            <h3>Social Media &rarr;</h3>
            <p>
              Add me on Facebook or LinkedIn.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        Sou
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ludilo
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a> */}
      </footer>
    </div>
  )
}
