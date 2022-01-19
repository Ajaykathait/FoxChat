import React from "react";
import * as EmailValidator from "email-validator";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore/";
import Chat from "./Chat";

export default function Sidebar() {
  const [user] = useAuthState(auth);
  const userChatRef = db
    .collection("chats")
    .where("users", "array-contains", user.email);
  const [chatsSnapshot] = useCollection(userChatRef);
  const createChat = () => {
    const input = prompt("Enter an Email to chat with");

    if (!input) return null;
    if (
      EmailValidator.validate(input) &&
      !chatAlreadyExists(input) &&
      input !== user.email
    ) {
      //add chat into DB
      db.collection("chats").add({
        users: [user.email, input],
      });
    }
  };
  const chatAlreadyExists = (recipientEmail) =>
    !!chatsSnapshot?.docs.find(
      (chat) =>
        chat.data().users.find((user) => user === recipientEmail)?.length > 0
    );

  return (
    <>
      <div
        className="full_left_side"
        style={{
          display: "flex",
          flexDirection: "column",
          Width: "300px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", justifyContent:'space-around' }}>
          <h1 style={{ color: "#fff" }}>Sidebar</h1>
          <div className="userAvatar">
            <img src={user.photoURL} alt="" />
          </div>
        </div>

        <button className="logOut" onClick={() => auth.signOut()}>
          LogOut..
        </button>
        <button onClick={createChat}>START A NEW CHAT</button>

        {/* list of chats */}
        {chatsSnapshot?.docs.map((chat) => (
          <Chat key={chat.id} id={chat.id} users={chat.data().users} />
        ))}
      </div>
    </>
  );
}
