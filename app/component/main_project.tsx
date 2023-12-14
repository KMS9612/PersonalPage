import { MouseEvent, MutableRefObject } from "react";
import Main_Card from "./main_card";

export default function Main_Project({
  targetProject,
  handleModal,
}: {
  targetProject: MutableRefObject<null>;
  handleModal: (e: MouseEvent<HTMLDivElement>) => void;
}) {
  // Project카드 종류와 내용이 담긴 배열 (name: 카드의 제목, describe: "설명 텍스트", src: "이미지 경로", route: "배포된 페이지 경로")
  const projectArr = [
    {
      name: "가계부",
      describe:
        "Next.js, Typescript, TailwindCss, Express.js, MongoDB를 사용해서 제작하는 가계부 프로젝트입니다. 간단한 CRUD구성으로 제작중이며 데이터 시각화와 TypeScript의 사용에 집중하며 제작중 입니다.",
      src: "/financial.png",
      route: "",
    },
    {
      name: "AON 회사 페이지",
      describe:
        "전 파트장님에게 받은 거래처 회사 페이지 퍼블리싱 외주로 제작한 페이지 입니다. HTML,CSS,JavaScript,AOS,Vite만을 사용해서 제작 후 배포는 의뢰측에서 진행했습니다.",
      src: "/aon.png",
      route: "https://aon-system.vercel.app/",
    },
    {
      name: "Workout (진행중)",
      describe:
        "React.js, Emotion, Express.js, MongoDB를 사용해서 제작중인 운동루틴 기록 서비스입니다. Rest-API의 활용과 백엔드 구현 및 프론트엔드 연동에 집중하며 제작했습니다.",

      src: "/workout.png",
      route: "https://workout-react.vercel.app/",
    },
    {
      name: "VanilaJS Training",
      describe:
        "VanilaJS와 HTML,CSS만을 사용해서 만든 여러가지 토이프로젝트의 집합입니다.",
      src: "/vanila.png",
      route: "https://kmsvanilajs.vercel.app/",
    },
  ];
  return (
    <div
      ref={targetProject}
      className="w-full h-screen flex flex-col justify-evenly items-center bg-lightBrown"
    >
      <div className="text-5xl font-bold text-brown" data-aos="fade-up">
        Project
      </div>
      <div className="w-full flex flex-wrap justify-center gap-10">
        {projectArr.map((e) => (
          <Main_Card
            key={e.name + e.describe}
            handleModal={handleModal}
            name={e.name}
            subText={e.describe}
            src={e.src}
            route={e.route}
          />
        ))}
      </div>
    </div>
  );
}
