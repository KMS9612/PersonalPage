"use client";
import { MutableRefObject } from "react";
import "../style/button.css";

export default function Main_Header({
  targetMain,
  onClickWheel,
}: {
  targetMain: MutableRefObject<null>;
  onClickWheel: () => void;
}) {
  return (
    <div
      ref={targetMain}
      className="h-screen bg-white flex flex-col justify-center items-center"
    >
      <div data-aos="fade-up" className="text-6xl font-bold mb-12">
        안녕하세요!
        <br />
        프론트엔드 개발자 <span className="text-brown">김민승</span>입니다!
      </div>
      <img src="" alt="" />
      <button
        onClick={onClickWheel}
        data-aos="fade-up"
        data-aos-delay="600"
        className="main_button"
      >
        <span>더 알아보기</span>
      </button>
    </div>
  );
}
