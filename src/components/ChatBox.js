import React from "react";
import Navbar from "./Navbar";

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[95vh] bg-gray-700 mt-5 shadow-xl border relative`,
};
const ChatBox = () => {
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <Navbar />
      </section>
    </div>
  );
};

export default ChatBox;
