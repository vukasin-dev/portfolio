
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Projects() {
    return (
        <div className={styles.container}>
            <Head>
                <title>vukasin.dev</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Projects
                </h1>
                <p className={styles.description}>
                    <code className={styles.code}>Projects I worked on.</code>
                </p>
                <div className={styles.grid}>
                    <a href="/projects" className={styles.card}>
                        <h3>Smart dice &rarr;</h3>
                        <div style={{display:"flex"}}>
                            <img style={{width:200}} src="/smartdice1.jpg"/>
                            <img style={{width:200}} src="/smartdice2.jpg"/>
                        </div>
                        <ul>
                            <li>
                                <p><strong>React Native</strong></p>
                            </li>
                            <li>
                                <p>Mobile game to test your brain skills, try to guess random generated combinations.</p>
                            </li>
                        </ul>
                    </a>
                </div>
                <div className={styles.grid}>
                    <a href="/projects" className={styles.card}>
                        <h3>LiftWOD &rarr;</h3>
                        <img style={{width:400}} src="/liftwod.png"/>
                        <p>Vuejs - Expressjs</p>
                    </a>
                </div>
                <div className={styles.grid}>
                    <a href="/projects" className={styles.card}>
                        <h3>CTL &rarr;</h3>
                        <p>React - Expressjs</p>
                    </a>
                </div>
                <div className={styles.grid}>
                    <a href="/projects" className={styles.card}>
                        <h3>This Portfolio Page &rarr;</h3>
                        <p>Next.js - React</p>
                    </a>
                </div>
            </main>
        </div>
    )
}