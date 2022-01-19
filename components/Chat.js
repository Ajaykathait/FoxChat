import { useRouter } from "next/router";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";
import getRecipientEmail from "../utils/getRecipientEmail";
import styles from "/styles/Chat.module.scss";


export default function Chat({ id, users }) {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const [recipientSnapshot] = useCollection(
    db.collection("users").where("email", "==", getRecipientEmail(users, user))
  );

  const enterChat = () => {
    router.push(`/foxChat/${id}`);
  };
  const recipient = recipientSnapshot?.docs?.[0]?.data();
  const recipientEmail = getRecipientEmail(users, user);
  return (
    <>
      <div className={styles.single_chat} onClick={enterChat}>
        <div className={styles.profile}>
          {recipient ? (
            <img src={recipient?.photoURL} />
          ) : (
            <div>{recipientEmail[0]}</div>
          )}
        </div>
        <h3 className={styles.user_name}>{recipientEmail}</h3>
      </div>
    </>
  );
}
