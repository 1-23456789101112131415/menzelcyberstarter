import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>OLHSCyber</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Cyber Security Tips" />
        <p className="description">
          Grayson Menzel
        </p>
      </main>

      <Footer />
    </div>
  )
}
