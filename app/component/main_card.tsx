import Image from "next/image";

export default function Main_Card({
  name,
  subText,
  src,
  route,
}: {
  name: string;
  subText: string;
  src: string;
  route: string;
}) {
  const onClickRouteProject = (route: string) => {
    window.open(route);
  };
  return (
    <div
      className="w-96 h-96 border-2 flex flex-col border-brown rounded-md overflow-hidden cursor-pointer"
      data-aos="fade-up"
      onClick={() => onClickRouteProject(route)}
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
