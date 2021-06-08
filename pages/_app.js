import "../styles/globals.css";

import Head from 'next/head'


import Layout from "../components/layout";
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <link rel='stylesheet' href='./assets/css/style.css' />
    </Head> 

    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}

export default MyApp;
