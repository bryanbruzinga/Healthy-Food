import Head from "next/head";
import Footer from "../components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Healthy Food</title>
      </Head>
      <main className="gutter">
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}

export default MyApp;
