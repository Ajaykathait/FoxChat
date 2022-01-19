import React from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "/styles/Chat.module.scss";

export default function index() {
  return (
    <>
      <Head>
        <title>FoxChat | CHATS</title>
      </Head>
      <div className={styles.chat_page}>
        <div className={styles.top_chat_features}>
          <div className={styles.left_features}>
            <div className={styles.search}>
              <input type="text" placeholder="SEARCH" />
            </div>
          </div>
          <div className={styles.right_features}>
            <div className={styles.single_feature}>CLEAR CHAT</div>
            <div className={styles.single_feature}>MORE</div>
            <div className={styles.single_feature}>LOG OUT</div>
          </div>
        </div>
        <div className={styles.bottom_chat}>
          <div className={styles.left_chats}>
            <div className={styles.single_chat}>
              <div className={styles.profile}>
                <Image src="/User-Profile.png" height={90} width={100} alt="" />
                <div className={styles.isOnline_indicator}></div>
              </div>
              <div className={styles.last_chat_name}>
                <div className={styles.user_name}>User One</div>
                <div className={styles.last_chat}>Hi there, How are you?</div>
              </div>
              <div className={styles.last_time_num}>
                <div className={styles.chat_time}>08:00</div>
                <div className={styles.unread_messages}>6</div>
              </div>
            </div>{" "}
            <div className={styles.single_chat}>
              <div className={styles.profile}>
                <Image src="/User-Profile.png" height={90} width={100} alt="" />
                <div className={styles.isOnline_indicator}></div>
              </div>
              <div className={styles.last_chat_name}>
                <div className={styles.user_name}>User One</div>
                <div className={styles.last_chat}>Hi there, How are you?</div>
              </div>
              <div className={styles.last_time_num}>
                <div className={styles.chat_time}>08:00</div>
                <div className={styles.unread_messages}>6</div>
              </div>
            </div>{" "}
            <div className={styles.single_chat}>
              <div className={styles.profile}>
                <Image src="/User-Profile.png" height={90} width={100} alt="" />
                <div className={styles.isOnline_indicator}></div>
              </div>
              <div className={styles.last_chat_name}>
                <div className={styles.user_name}>User One</div>
                <div className={styles.last_chat}>Hi there, How are you?</div>
              </div>
              <div className={styles.last_time_num}>
                <div className={styles.chat_time}>08:00</div>
                <div className={styles.unread_messages}>6</div>
              </div>
            </div>{" "}
            <div className={styles.single_chat}>
              <div className={styles.profile}>
                <Image src="/User-Profile.png" height={90} width={100} alt="" />
                <div className={styles.isOnline_indicator}></div>
              </div>
              <div className={styles.last_chat_name}>
                <div className={styles.user_name}>User One</div>
                <div className={styles.last_chat}>Hi there, How are you?</div>
              </div>
              <div className={styles.last_time_num}>
                <div className={styles.chat_time}>08:00</div>
                <div className={styles.unread_messages}>6</div>
              </div>
            </div>{" "}
            <div className={styles.single_chat}>
              <div className={styles.profile}>
                <Image src="/User-Profile.png" height={90} width={100} alt="" />
                <div className={styles.isOnline_indicator}></div>
              </div>
              <div className={styles.last_chat_name}>
                <div className={styles.user_name}>User One</div>
                <div className={styles.last_chat}>Hi there, How are you?</div>
              </div>
              <div className={styles.last_time_num}>
                <div className={styles.chat_time}>08:00</div>
                <div className={styles.unread_messages}>6</div>
              </div>
            </div>
          </div>
          <div className={styles.right_chats}>
            <div className={styles.extended_chat}>
              <div className={styles.my_messages}>
                <div className={styles.text_messages}>Hi, How are You?</div>
              </div>
              <div className={styles.other_user_messages}>
                <div className={styles.profile}>
                  <Image
                    src="/User-Profile.png"
                    height={50}
                    width={58}
                    alt=""
                  />
                  <div className={styles.message_timing}>09:00</div>
                </div>
                <div className={styles.text_messages}>
                  I am fine, how are you?
                </div>
              </div>

              <div className={styles.cat_box}>
                <input type="text" placeholder="Type a message" />
                <div className={styles.send_button}>SEND</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
