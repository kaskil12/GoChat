import Image from "next/image";
import Chatbox from "@/components/Chatbox";
import Sidebar from "@/components/Sidebar";
export default function Home() {
  return (
    <>
      <div className="flex">
        <div className="flex-shrink-0 left-0 pr-55 h-screen w-52 bg-gray-600 text-white mr-5 rounded-r-3xl shadow-xl shadow-blue-950">
          <Sidebar></Sidebar>
        </div>
        <div className="flex-grow">
          <Chatbox></Chatbox>
        </div>
      </div>
    </>
  );
}
