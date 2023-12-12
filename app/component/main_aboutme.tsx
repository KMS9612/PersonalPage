import { MutableRefObject } from "react";

export default function Main_AboutMe({
  targetAboutMe,
}: {
  targetAboutMe: MutableRefObject<null>;
}) {
  return (
    <div
      ref={targetAboutMe}
      className="font-bold flex flex-col w-full h-screen text-bold justify-evenly items-center bg-secBrown"
    >
      <div className="text-5xl text-white" data-aos="fade-up">
        About Me
      </div>
      <div className="w-full px-10 flex justify-center gap-10">
        <div
          className="w-2/6 h-96 border-2 border-white rounded-lg bg-white"
          data-aos="fade-up"
        >
          <div className="text-5xl text-secBrown text-center p-5">기술</div>
          <div className="flex justify-evenly mt-6">
            <ul className="text-xl ">
              <li>React</li>
              <li>Next</li>
              <li>TypeScript</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>PHP(Low)</li>
            </ul>
            <ul className="text-xl ">
              <li>Emotion</li>
              <li>TailWind</li>
              <li>Figma</li>
              <li>Resp-API</li>
              <li>Graph-QL</li>
              <li>Jquery</li>
            </ul>
          </div>
        </div>
        <div
          className="w-2/6 h-96 border-2 border-white rounded-lg p-6 bg-white"
          data-aos="fade-up"
        >
          <div className="text-5xl text-secBrown text-center">소개</div>
          <div className="flex text-lg mt-6">
            함께 일하고 싶은 개발자를 지향하는 개발자 김민승입니다.
            <br />
            <br />
            저는 함께 일하고 싶은 개발자란 단순히 개발만 잘하는게 아닌 소통과
            협업을 중시하며 팀의 기둥이 되는 사람이라고 생각합니다.
            <br />
            <br />
            지금 이런 목표를 달성하기 위해선 개발실력과 기반지식이 부족하다고
            판단해서 다양한 프로젝트, 자료구조와 알고리즘, 백엔드 등 웹 개발에
            있어 필요한 점을 계속해서 공부중입니다.
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
