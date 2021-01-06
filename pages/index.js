import Head from 'next/head'
import styles from '../styles/Home.module.css'

function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Sam.js</h1>
      </main>
    </div>
  )
}

Home.headerTitle = 'Latest Tweets'
export default Home
