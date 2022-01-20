import React from "react";
import Sidebar from "../../components/Sidebar"
import ChatScreen from "../../components/ChatScreen";
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
          justifyContent:'space-around',
          padding:'2rem 5px'
        }}
      >
        <div style={{ width: "27vw" }}>
          <Sidebar />
        </div>
        <div className="chatScreen"  style={{ width: "70vw", position:"relative", height:'90vh', backgroundColor:'#5c4f81', padding:'1rem' }}>
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
