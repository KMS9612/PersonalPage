"use client";
import Main_Header from "@/app/component/main_head";
import {
  MouseEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import Main_AboutMe from "./component/main_aboutme";
import Aos from "aos";
import Main_Project from "./component/main_project";
import SideBar from "./component/sidebar";
import Modal_Project from "./component/modal_project";

interface IRefMap {
  Main: MutableRefObject<null>;
  "About Me": MutableRefObject<null>;
  Project: MutableRefObject<null>;
  Contact: MutableRefObject<null>;
  [key: string]: MutableRefObject<null>;
}

export default function Home() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [modalTarget, setModalTarget] = useState<string>("");

  useEffect(() => {
    Aos.init({
      duration: 600,
      delay: 100,
      offset: 200,
      easing: "ease-in-out",
      anchorPlacement: "top-bottom",
    });
  }, []);

  const refMap: IRefMap = {
    Main: useRef(null),
    "About Me": useRef(null),
    Project: useRef(null),
    Contact: useRef(null),
  };

  const onClickSideMenu = (e: MouseEvent<HTMLLIElement>) => {
    const clicked = e.currentTarget.innerHTML;

    const target = refMap[clicked];
    target.current &&
      window.scrollTo({
        top: target.current.offsetTop,
        behavior: "smooth",
      });
  };

  const onClickWheel = () => {
    refMap["About Me"].current &&
      window.scrollTo({
        top: refMap["About Me"].current.offsetTop,
        behavior: "smooth",
      });
  };

  const handleModal = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const str = target.innerText;
    if (str.includes("AON")) {
      setModalTarget("aon");
    }
    if (str.includes("Workout")) {
      setModalTarget("workout");
    }
    if (str.includes("Vanila")) {
      setModalTarget("vanilajs");
    }
    setIsOpen(true);
  };
  return (
    <div className="w-100 h-100 flex flex-col justify-center items-center">
      <Modal_Project
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        target={modalTarget}
      />
      <SideBar onClickSideMenu={onClickSideMenu} />
      <Main_Header targetMain={refMap.Main} onClickWheel={onClickWheel} />
      <Main_AboutMe targetAboutMe={refMap["About Me"]} />
      <Main_Project targetProject={refMap.Project} handleModal={handleModal} />
      <footer
        ref={refMap.Contact}
        className="w-full h-48 bg-slate-700 flex justify-center items-center gap-24 text-white font-bold"
      >
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
