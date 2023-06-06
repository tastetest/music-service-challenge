import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      yo
      <Link href='/fetch-music'>You should go to this page to fetch data</Link>
    </div>
  )
}
