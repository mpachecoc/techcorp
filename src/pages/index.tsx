// import { GetStaticProps } from 'next'
import Head from 'next/head'

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | TechCorp.dev</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏  Hey, welcome</span>
          <h1>Looking for <span>Software Development</span> Services?</h1>
          <p>
            Let us help you and <span>get in touch</span>
          </p>

          <div className={styles.contact}>
            <input type="email" name="client-email" placeholder="Your best email..." />
            <button 
              type="button"
              onClick={() => {}}
            >
              Contact me
            </button>
          </div>
        </section>

        <img src="/images/avatar.svg" alt="Girl coding"/>
      </main>
    </>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {},
//     revalidate: 60 * 60 * 24  // 24 Hrs
//   }
// }
