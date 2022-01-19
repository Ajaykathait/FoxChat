import React from "react";
import * as EmailValidator from 'email-validator';

export default function Sidebar() {
    const createChat = () =>{
        const input = prompt("Enter an Email to chat with");

        if(!input) return null;
        if(EmailValidator.validate(input));
    }
  return (
    <>
      <h1>Sidebar</h1>

      <div className="Search">
        <input type="text" placeholder="Search"/>
      </div>
      <button onClick={createChat}>
          START A NEW CHAT
      </button>
      {/* list of chats */}

    </>
  );
}
