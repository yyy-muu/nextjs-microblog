import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'
import utilStyles from "../styles/utils.module.css"
import {getPostsData} from '../lib/post'

// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData()
  console.log(allPostsData)

  return {
    props: {
      allPostsData
    }
  }
}


export default function Home({allPostsData}) {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>
          駆け出しエンジニアです
        </p>
      </section>

      <section>
        <h2>ブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({id, title, date, thumbnail}) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`} className={styles.thumbnailImage}/>
              </Link>
              <Link href={`/posts/${id}`} className={utilStyles.boldText}>
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                {date}
              </small>
          </article>
          ))}
        </div>
      </section>


    </Layout>
  );
}
