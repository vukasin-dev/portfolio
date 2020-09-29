
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
                    <code className={styles.code}>My Portfolio</code>
                </p>
                <div className={styles.grid}>
                    <div className={styles.myCard}>
                        <h1>Smart dice &rarr;</h1>
                        <br></br>
                        <div style={{display:"flex"}}>
                            <img style={{width:200}} src="/smartdice2.jpg"/>
                            <img style={{width:200}} src="/smartdice1.jpg"/>
                            <img style={{width:200}} src="/smartdice3.jpg"/>
                        </div>
                        <br></br>
                        <div class={styles.hl}></div>
                        <ul>
                            <li>
                                <p><strong>React Native</strong></p>
                            </li>
                            <li>
                                <p>Mobile game to test your brain skills, try to guess random generated combinations.</p>
                            </li>
                            <li>
                                <p><a target="_blank" href="https://play.google.com/store/apps/details?id=smartdice.app">Play Store Link</a></p>
                            </li>
                            <li>
                                <p><a target="_blank" href="https://github.com/vukasin-dev/smart-dice">Github Link</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.grid}>
                    <div className={styles.myCard}>
                        <h1>TrainMe Online &rarr;</h1>
                        <br></br>
                        <div style={{display:"flex"}}>
                            <img style={{width:200}} src="/trainme2.png"/>
                            <img style={{width:200}} src="/trainme1.png"/>
                            <img style={{width:200}} src="/trainme3.png"/>
                        </div>
                        <br></br>
                        <div class={styles.hl}></div>
                        <ul>
                            <li>
                                <p><strong>Node.js - Express - TypeORM | Angular9 - Capacitor</strong></p>
                            </li>
                            <li>
                                <p>TrainMe Online is the most progressive platform for coaches and trainers who want to offer a premium experience to their clients without the headache of managing spreadsheets, email and text messages. We want to increase client engagement while helping to eliminate accountability issues which is why we built a robust internal messaging system so you can connect with all of your clients on one platform. Spend more time engaging with clients and delivering the highest level coaching experience possible.</p>
                            </li>
                            <li>
                                <p><a target="_blank" href="https://play.google.com/store/apps/details?id=online.trainme.app&hl=en">Play Store Link</a></p>
                            </li>
                            <li>
                                <p><a target="_blank" href="https://app.train-me.online/login">Web App Link</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}