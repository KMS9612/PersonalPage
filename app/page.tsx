"use client";

import {
  MouseEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import Main_AboutMe from "../src/component/mainLayout/main_aboutme";
import Aos from "aos";
import Modal_Project from "@/src/component/mainLayout/modal_project";
import SideBar from "@/src/component/mainLayout/sidebar";
import Main_Header from "@/src/component/mainLayout/main_head";
import Main_Project from "@/src/component/mainLayout/main_project";

interface IRefMap {
  Main: MutableRefObject<null> | any;
  "About Me": MutableRefObject<null> | any;
  Project: MutableRefObject<null> | any;
  Contact: MutableRefObject<null> | any;
  [key: string]: MutableRefObject<null> | any;
}

export default function Home() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [modalTarget, setModalTarget] = useState<string>("");

  // AOS 라이브러리 초기화
  useEffect(() => {
    Aos.init({
      duration: 600,
      delay: 100,
      offset: 200,
      easing: "ease-in-out",
      anchorPlacement: "top-bottom",
    });
  }, []);

  // 사이드 바 클릭시 화면 이동을 위한 RefMap 데이터
  const refMap: IRefMap = {
    Main: useRef(null),
    "About Me": useRef(null),
    Project: useRef(null),
    Contact: useRef(null),
  };

  // 사이드메뉴 버튼 클릭시 해당하는 위치로 스크롤 시키는 함수
  const onClickSideMenu = (e: MouseEvent<HTMLLIElement>) => {
    const clicked = e.currentTarget.innerHTML;

    const target = refMap[clicked];
    target.current &&
      window.scrollTo({
        top: target.current.offsetTop,
        behavior: "smooth",
      });
  };

  // Main의 더 알아보기 버튼 클릭시 About Me로 스크롤 시키는 함수
  const onClickWheel = () => {
    refMap["About Me"].current &&
      window.scrollTo({
        top: refMap["About Me"].current.offsetTop,
        behavior: "smooth",
      });
  };

  // Project Card 클릭시 Modal_Project컴포넌트 화면에 띄우는 함수
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
    if (str.includes("가계부")) {
      setModalTarget("financial");
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
      </footer>
    </div>
  );
}
