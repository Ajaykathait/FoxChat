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
import getRecipientEmail from "../utils/getRecipientEmail";

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

  const [recipientSnapshot] = useCollection(
    db
      .collection("users")
      .where("email", "==", getRecipientEmail(chat.users, user))
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

  const recipient = recipientSnapshot?.docs?.[0]?.data();
  const recipientEmail = getRecipientEmail(chat.users, user);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          width: "100%",
          padding: "12px 10px",
          gap: "10px",
        }}
      >
        <h3
          style={{
            color: "#4e426d",
          }}
        >
          {recipientEmail}
        </h3>
        <div
          style={{
            width: "70px",
            height: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#cecece",
            borderRadius: "50%",
            color:'#4e426d',
            fontSize:'1.6rem',
            fontWeight:'600',
            border:'2px solid #4e426d'
            ,overflow:'hidden'
          }}
        >
          {recipient ? (
            <img src={recipient?.photoURL} />
          ) : (
            <div>{recipientEmail[0].toUpperCase()}</div>
          )}
        </div>
      </div>
      <div>{showMessages()}</div>
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
