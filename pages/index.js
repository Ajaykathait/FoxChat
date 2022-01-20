import Head from "next/head";
import Sidebar from "../components/sidebar";

export default function Home() {
  return (
    <>
      <Head>
        <title>FoxChat|CHATS</title>
      </Head>
      <Sidebar />
    </>
  );
}
