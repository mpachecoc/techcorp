// import { GetStaticProps } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import axios from 'axios'

import { Toast } from '../config/toast'

import styles from './home.module.scss'

export default function Home() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSendEmail() {

    setLoading(true)

    if (!email) {
      Toast.fire({
        icon: 'warning',
        title: 'Alerta',
        text: 'Please fill your E-mail!'
      })

      setLoading(false)
      return
    }

    const data = {
      email
    }

    try {
      await axios.post('/api/contact', data);

      setLoading(false)
      setEmail('')

      Toast.fire({
        icon: 'success',
        title: 'Ok',
        text: 'E-mail sent! Thank you'
      })
    } catch (err) {
      setLoading(false)
      setEmail('')

      Toast.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ups! Something happened, please try again.'
      })

      console.log(err)
    }
  }

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
            <input 
              type="email" 
              placeholder="Your best email..." 
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            {
              loading 
              ? (<button type="button" disabled >Sending...</button>)
              : (<button type="button" onClick={handleSendEmail} >Contact me</button>)
            }
            
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
