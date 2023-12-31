import Image from "next/image";
import { MouseEvent } from "react";

export default function Main_Card({
  name,
  subText,
  src,
  route,
  handleModal,
}: {
  name: string;
  subText: string;
  src: string;
  route: string;
  handleModal: (e: MouseEvent<HTMLDivElement>) => void;
}) {
  return (
    <div
      className="w-96 h-96 flex flex-col rounded-md overflow-hidden cursor-pointer"
      data-aos="fade-up"
      onClick={handleModal}
    >
      <div className="relative w-full h-4/6 bg-gray-600">
        <Image
          src={`${src}`}
          alt={"웹페이지 미리보기 이미지"}
          fill={true}
        ></Image>
      </div>
      <div className="h-2/6 bg-white overflow-auto p-2 divide-y-4 divide-lightBrown">
        <div className="text-lg font-bold">{name}</div>
        <div>{subText}</div>
      </div>
    </div>
  );
}
