import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import styles from "../styles/Chat.module.scss";


export default function Message({ user, message }) {
  const [userLoggedIn] = useAuthState(auth);

  const TypeOfMessage = user === userLoggedIn.email 
  return (
    <>
      {TypeOfMessage ? (
        <div className={styles.text_messages}>
          {message.messages}
        </div>
      ) : (
        <div className={styles.text_messages_l}>{message.messages}</div>
      )}
    </>
  );
}

// const Sender = styled(MessageElement)`
//   margin-left: auto;
//   background-color: #dcf8c6;
// `;

// const Receiver = styled(MessageElement)`
//   margin-right: auto;
//   background-color: whitesmoke;
// `;
