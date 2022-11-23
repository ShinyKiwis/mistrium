import { Clients, Collections, HeroSection, Navbar } from '../components'
import Head from 'next/head'
import HomeStyle from '../styles/Home.module.css'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Mistrium</title>
        <link rel="shortcut icon" href="/favicon.svg"/>
      </Head>
      <Navbar />
      <HeroSection />
      <Clients />
      <Collections />
    </main>
  )
}
