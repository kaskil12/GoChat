"use client"
import { useState } from "react";
export default function Chatbox(){
    const [chat, setChat] = useState<string[]>([])
    const [text, setText] = useState("")
    function addChat(chats: string){
        setChat([...chat, chats])
    }
    return(
        <>
            <div className="flex flex-col h-[100wh] overflow-scroll pb-40">
                {chat.map((item, index) => {
                    return (
                    <div key={index} className="border rounded-md p-4 mt-2 flex bg-[#4E545C]">
                        <div className="flex flex-col">
                            <p className="font-bold ml-10 text-[#000401] text-xl">User</p>
                            <div className="flex break-all">
                                <img src="/profile.jpg" alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                                <p>{item}</p>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
            <div className="fixed bottom-0 flex items-center justify-center w-full break-words field-sizing-content">
                <div className="flex w-full">
                    <textarea
                        className="bg-[#8D9797] rounded-md max-w-full max-h-50 min-h-20 mb-7 shadow-md border border-[#000000] inset-shadow-sm inset-shadow-indigo-500 w-full" 
                        value={text}
                        onChange={e => setText(e.target.value)}
                        placeholder="Message..."
                        onKeyDown={e => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                addChat(text);
                                setText("");
                            }
                        }}
                        rows={1}
                    />
                </div>
            </div>
        </>
    );
}