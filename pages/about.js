import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Skills() {
    return (
        <div className={styles.container}>
            <Head>
                <title>vukasin.dev</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Skills
                </h1>
                <p className={styles.description}>
                    <code className={styles.code}>My favourite tech</code>
                </p>
                    <div className={styles.myCard}>
                        <ul>
                            <li>
                                <img style={{width:30}} src="/computer.svg"/><span style={{fontSize:'2.3rem'}}><strong> Front end:</strong></span>
                            </li>
                            <p style={{fontSize:'1.3rem'}}>React, Angular</p>
                            <br></br>
                            <li>
                                <img style={{width:30}} src="/database.svg"/><span style={{fontSize:'2.3rem'}}><strong> Back end:</strong></span>
                            </li>
                            <p style={{fontSize:'1.3rem'}}>Node.js, Express, TypeORM</p>
                            <br></br>
                            <li>
                                <img style={{width:30}} src="/internet.svg"/><span style={{fontSize:'2.3rem'}}><strong> DevOps:</strong></span>
                            </li>
                            <p style={{fontSize:'1.3rem'}}>Apache</p>
                        </ul>
                  </div>
            </main>
            {/* <div>Icons made by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
        </div>
    )
}