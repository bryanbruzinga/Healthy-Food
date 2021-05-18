import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Healthy Food</title>
      </Head>
      <main className="gutter">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}

export default MyApp;
