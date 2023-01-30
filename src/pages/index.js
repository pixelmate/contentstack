import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Stack from "../../sdk-plugins/index";
import Layout from 'components/Layout/Layout';

const inter = Inter({ subsets: ['latin'] })

export default function Home({ pagedata }) {
  console.log(pagedata.page_desciption, "desciption")
  return (
    <>
      <Head>
        <title>{pagedata.title + " - " + pagedata.page_desciption}  </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Layout>
          <h1>Hello</h1>
        </Layout>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const result = await Stack.getEntry("home_p", "en-us");
  // console.log(result);
  return {
    props: {
      pagedata: result[0][0] || [],
    },
  };
}
