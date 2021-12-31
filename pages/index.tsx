import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto dashboard</title>
        <meta name="description" content="Crypto dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>This is the new crypto dashboard</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
