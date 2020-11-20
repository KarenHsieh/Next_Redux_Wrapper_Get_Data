import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Results from './results'

export default function Home() {
  return (
    <div className={styles.container}>
      <Results />
    </div>
  )
}
