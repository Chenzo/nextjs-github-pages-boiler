import Head from 'next/head'
import styles from '../styles/pages/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
        <Head>
          <title>GitHub NextJS BoilerPlate</title>
        </Head>
        <h1>GitHub NextJS BoilerPlate</h1>
    </div>
  )
}
