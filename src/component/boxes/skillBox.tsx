import { IPropsSkillBox } from "@/src/types/skillBox";

export default function SkillBox(props: IPropsSkillBox) {
  return (
    <div
      className="w-1/3 h-40 border-2 border-white rounded-lg bg-white"
      data-aos="fade-up"
    >
      <div className="text-5xl text-secBrown text-center p-5">기술</div>
      <div className="h-[300px] flex justify-evenly mt-6">
        <ul className="h-full text-xl flex flex-col flex-wrap">
          {props.listData.map((el: string, index: number) => (
            <li key={el + index}>{el}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
