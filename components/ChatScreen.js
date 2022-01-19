import { useRouter } from "next/router";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styles from "../styles/Chat.module.scss";
import { auth } from "../firebase";
import { db } from "../firebase";
import Image from "next/image";
import { useCollection } from "react-firebase-hooks/firestore/";
import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Message from "./Message";

export default function ChatScreen({ chat, messages }) {
  const [user] = useAuthState(auth);
  const [input, setInput] = useState("");
  const router = useRouter();
  const [messagesSnapshot] = useCollection(
    db
      .collection("chats")
      .doc(router.query.id)
      .collection("messages")
      .orderBy("timestamp", "asc")
  );

  const showMessages = () => {
    if (messagesSnapshot) {
      return messagesSnapshot.docs.map(
        (message) => (
          console.log(message.data()),
          (
            <Message
              key={message.id}
              user={message.data().user}
              message={{
                ...message.data(),
                timestamp: message.data().timestamp?.toDate().getTime(),
              }}
            />
          )
        )
      );
    } else {
      return JSON.parse(messages).map((message) => (
        <Message key={message.id} user={message.user} message={message} />
      ));
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();

    // last seen...
    db.collection("users").doc(user.uid).set(
      {
        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );

    db.collection("chats").doc(router.query.id).collection("messages").add({
      messages: input,
      user: user.email,
      photoURL: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div>
      <h1>this is a chat</h1>
      <div className={styles.text_messages}>{showMessages()}</div>
      <form className={styles.cat_box}>
        <input
          placeholder="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          onClick={sendMessage}
          className={styles.send_button}
        >
          SEND
        </button>
      </form>
    </div>
  );
}
