import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from './page.module.css'
import Content from './message.mdx'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${inter.className}`}>
        <Content />
    </main>
  )
}
