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
      <div className="w-full px-10 flex gap-10">
        <div
          className="w-1/2 h-96 border-2 border-white rounded-lg"
          data-aos="fade-up"
        >
          <div className="text-5xl text-white text-center p-5">기술</div>
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
          className="w-1/2 h-96 border-2 border-white rounded-lg"
          data-aos="fade-up"
        >
          <div className="text-5xl text-white text-center p-5">소개</div>
          <div className="flex justify-center items-center text-lg mt-6">
            안녕하세요 풀스택 개발자를 지향하는 프론트엔드 개발자 김민승입니다.{" "}
            <br />
            저는 스스로 부족한 점을 잘 아는 개발자라고 생각하며 이 점이
            장점이라고 생각합니다.
            <br />
            모든 문제의 해결은 문제자체를 정확히 파악함부터 시작한다고 생각하기
            때문에
            <br />
            문제를 인지하고 개선해 나가려고 하는 부분을 장점이라고 생각합니다.
            <br />
            <br />
            지금은 신입 개발자인만큼 부족한 점이 많지만 계속해서 노력하며 더
            나은,
            <br />
            누구나 같이 일하고싶은 개발자가 되기 위해 계속 성장하겠습니다.
          </div>
        </div>
      </div>
    </div>
  );
}
