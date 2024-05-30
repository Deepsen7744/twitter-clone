import Image from "next/image";
import { BiHash, BiMoney, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { FaHome } from "react-icons/fa";

import FeedCard from "./components/FeedCard";
import { SlOptions } from "react-icons/sl";



export default function Home() {
  interface TwitterSidebarButton {
    title: string;
    icon: React.ReactNode;
  }

  const sidebarMenuItems: TwitterSidebarButton[] = [
    {
      title: "Home",
      icon: <FaHome className="text-slate-50" />,
    },
    {
      title: "Explore",
      icon: <BiHash className="text-slate-50" />,
    },
    {
      title: "Notifications",
      icon: <BsBell className="text-slate-50" />,
    },
    {
      title: "Messages",
      icon: <BsEnvelope className="text-slate-50" />,
    },
    {
      title: "Bookmarks",
      icon: <BsBookmark className="text-slate-50" />,
    },
    {
      title: "Twitter Blue",
      icon: <BiMoney   className="text-slate-50" />,
    },
    {
      title: "Profile",
      icon: <BiUser className="text-slate-50" />,
    },
    {
      title: "More Option",
      icon: <SlOptions className="text-slate-50" />,
    },
  ];

  return (
    <div className={ `bg-black text-slate-50`}>
      <div className="grid grid-cols-12 h-screen w-screen px-56 ">
        <div className="col-span-3  pt-2 px-4 w-fit ml-10">
          <div className="text-2xl  w-fit h-fit hover:bg-gray-800 rounded-full p-2 text-slate-100 cursor-pointer transition-all mt-2">
            <BsTwitter />
          </div>
          <div className="mt-2 text-lg  pr-4 ">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center text-white gap-2 hover:bg-gray-800 rounded-full px-3 py-2 cursor-pointer mt-2"
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3">
            <button className=" bg-[#1d9bf0] p-2  rounded-full w-full font-semibold   text-lg mt-4 mx-4 ">Tweet</button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] border-gray-600  h-screen   w-full   overflow-scroll       no-scrollbar">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
