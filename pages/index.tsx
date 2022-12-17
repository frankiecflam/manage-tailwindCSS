import Head from "next/head";
import Header from "../src/components/header/Header";
import Hero from "../src/components/hero/Hero";
import About from "../src/components/about/About";
import Testimonials from "../src/components/testimonials/Testimonials";
import Cta from "../src/components/cta/Cta";
import Footer from "../src/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Manage with TailwindCSS</title>
        <meta
          name="description"
          content="A coding challenge from Frontend Mentor to practice my TailwindCSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Header />
        <Hero />
        <About />
        <Testimonials />
        <Cta />
        <Footer />
      </main>
    </>
  );
}
