"use client";
import Main_Header from "@/app/component/main_head";
import { useEffect, useRef } from "react";
import Main_AboutMe from "./component/main_aboutme";
import Aos from "aos";
import Main_Project from "./component/main_project";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 600,
      delay: 100,
      offset: 200,
      easing: "ease-in-out",
      anchorPlacement: "top-bottom",
    });
  }, []);
  const targetMain = useRef(null);
  const targetAboutMe = useRef(null);
  const onClickWheel = () => {
    if (targetAboutMe.current) {
      window.scrollTo({
        top: targetAboutMe.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="w-100 h-100 flex flex-col justify-center items-center">
      <Main_Header targetMain={targetMain} onClickWheel={onClickWheel} />
      <Main_AboutMe targetAboutMe={targetAboutMe} />
      <Main_Project />
      <footer className="w-full h-48 bg-slate-700 flex justify-center items-center gap-24 text-white font-bold">
        <a
          href="https://github.com/KMS9612"
          className="cursor-pointer"
          target="_blank"
        >
          Github
        </a>
        <a href="mailto:malcomex@naver.com" className="cursor-pointer">
          Email
        </a>
        <a className="cursor-pointer">Phone : 010-3637-7076</a>
      </footer>
    </div>
  );
}
