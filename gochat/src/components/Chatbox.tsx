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
            <div className="flex flex-col h-[100wh] overflow-scroll">
                {chat.map((item, index) => {
                    return (
                    <div key={index} className="border rounded-md p-4 mt-2 flex bg-[#4E545C]">
                        <div className="flex flex-col">
                            <p className="font-bold ml-10 text-[#000401] text-xl">User</p>
                            <div className="flex">
                                <img src="/profile.jpg" alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                                <p>{item}</p>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
            <div className="fixed bottom-0 flex items-center justify-center w-full">
                <div className="flex">
                    <input className="bg-[#8D9797] rounded-md w-200 h-10" value={text} onChange={e=>setText(e.target.value)} placeholder="Message..." onKeyDown={e=>{if(e.key === "Enter"){addChat(text)}}}></input>
                </div>
            </div>
        </>
    );
}