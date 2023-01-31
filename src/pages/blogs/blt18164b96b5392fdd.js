import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Stack from "../../../sdk-plugins/index";
import Layout from "components/Layout/Layout";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function blogs({
  pagedata,
  carouselData,
  twocolumntileData,
  ctaData,
}) {
  console.log(pagedata, "pagedata");
  return (
    <>
      <Head>
        <title>{pagedata.title} </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Layout>
          <div className="container text-center">
            <h1>{pagedata.title}</h1>
            <Image
              className="banner_img"
              src={pagedata.blog_image.url}
              width="1110"
              height="450"
              alt={"jsjs"}
            />
            <h4 className="text-start">Rating: {pagedata.star_rating_p}</h4>
            <p>{pagedata.blog_description}</p>
          </div>
        </Layout>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const result = await Stack.getEntry("blog", "en-us");
  const carousel = await Stack.getEntry("carousel", "en-us");
  // const twocolumntile = await Stack.getEntry("twocolumntile", "en-us");
  // const cta = await Stack.getEntry("cta", "en-us");

  return {
    props: {
      pagedata: result[0][1] || [],
      carouselData: carousel[0][0] || [],
      // twocolumntileData: twocolumntile[0][0] || [],
      // ctaData: cta[0][0] || [],
    },
  };
}
