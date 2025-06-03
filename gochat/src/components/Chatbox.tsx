"use client";
import { useState } from "react";
export default function Chatbox() {
  const [chat, setChat] = useState<string[]>([]);
  const [text, setText] = useState("");
  function addChat(chats: string) {
    setChat([...chat, chats]);
  }
  return (
    <div className="relative h-screen flex flex-col scroll-smooth">
      <div className="flex-1 overflow-y-auto pb-40">
        {chat.map((item, index) => {
          return (
            <div
              key={index}
              className="border rounded-md p-4 mt-2 flex bg-[#4E545C] shadow-lg shadow-black"
            >
              <div className="flex flex-col">
                <p className="font-bold ml-10 text-[#000401] text-xl">User</p>
                <div className="flex break-all">
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <p>{item}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-0 left-0 right-0 px-4 py-2  backdrop-blur-sm shadow-lg shadow-black">
        <div className="flex w-full">
          <textarea
            className="bg-[#8D9797] rounded-md max-w-full max-h-50 min-h-20 mb-2 shadow-md w-full box-border"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder=""
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                addChat(text);
                setText("");
              }
            }}
            rows={1}
          />
        </div>
      </div>
    </div>
  );
}
