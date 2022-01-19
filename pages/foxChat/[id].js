import React from "react";
import Sidebar from "../../components/sidebar";
import ChatScreen from "../../components/ChatScreen";
import { async } from "@firebase/util";
import { db } from "../../firebase";

export default function Chat({ chat, messages }) {
  return (
    <>
      <div
        className="full_screen"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100vw",
        }}
      >
        <div style={{ width: "27vw" }}>
          <Sidebar />
        </div>
        <div className="chatScreen"  style={{ width: "70vw", position:"relative", height:'90vh' }}>
          <ChatScreen chat={chat} messages={messages} />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const ref = db.collection("chats").doc(context.query.id);
  const messagesRes = await ref
    .collection("messages")
    .orderBy("timestamp", "asc")
    .get();

  const messages = messagesRes.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .map((messages) => ({
      ...messages,
      timestamp: messages.timestamp.toDate().getTime(),
    }));

  // PREP the chat
  const chatRes = await ref.get();
  const chat = {
    id: chatRes.id,
    ...chatRes.data(),
  };

  return {
    props: {
      messages: JSON.stringify(messages),
      chat: chat,
    },
  };
}
