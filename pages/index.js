import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Chat from "../pages/chat";
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
