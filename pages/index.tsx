import Head from "next/head";
import Header from "../src/components/header/Header";

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
      </main>
    </>
  );
}
