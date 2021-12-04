import Head from "next/head";
import { useEffect } from "react";
import Feed from "../components/Feed/Feed";
import Header from "../components/Header";
import axios from "axios";

export default function Home({ profiles }) {
  return (
    <div className='bg-gray-50 overflow-y-scroll scrollbar-hide '>
      <Head>
        <title>Instagram-Clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className=''>
        <Header />
        <Feed profiles={profiles} />
        {/* <model/> */}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const fakedata = await axios(
    "https://joealsaaidah.github.io/data/profile-data.json"
  );
  const profiles = fakedata.data.data;

  return {
    props: {
      profiles: profiles,
    },
  };
}
