import { Inter } from '@next/font/google'
import PageLayout from '@/components/PageLayout'
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Contact from './contact';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [articles, setArticles] = useState([])

  useEffect(()=> {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-01-19&sortBy=publishedAt&apiKey=API_KEY')
    .then(res => res.json())
    .then(response => {
      const {articles} = response
      setArticles(articles)
    })
  }, [])

  return (
    <PageLayout title='NewsApp-Home'>
      {/* Es el titulo que estara solo en esa pagina */}
      <div className={styles.container}>
        <h1>Learning Next.js</h1>
        <Link href="/about"> Go to about </Link>
        <Link href="/article/2"> Go to article </Link>
        <Link href="/contact"> Go to contact </Link>
      </div>
    </PageLayout>

  )
}
