import { MutableRefObject } from "react";
import SkillBox from "../boxes/skillBox";

export default function Main_AboutMe({
  targetAboutMe,
}: {
  targetAboutMe: MutableRefObject<null>;
}) {
  const SkillBoxes = [
    {
      title: "FrameWork / Language",
      listData: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next",
        "Express",
        "Node",
      ],
    },
    {
      title: "Style",
      listData: ["Emotion", "Styled-Component", "TailWind-CSS", "Material-UI"],
    },
    {
      title: "FrameWork / Language",
      listData: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next",
        "Express",
        "Node",
      ],
    },
  ];
  return (
    <div
      ref={targetAboutMe}
      className="font-bold flex flex-col w-full h-screen text-bold justify-evenly items-center bg-secBrown"
    >
      <div className="text-5xl text-white" data-aos="fade-up">
        Tech
      </div>
      <div className="w-full px-10 flex justify-center gap-10">
        <SkillBox title={""} listData={[]} />
      </div>
    </div>
  );
}
