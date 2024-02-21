import { Dispatch, MouseEvent, SetStateAction, useState } from "react";

interface IInnerObject {
  git: string;
  path: string;
}
interface ITargetObject {
  financial: IInnerObject;
  aon: IInnerObject;
  workout: IInnerObject;
  vanilajs: IInnerObject;
  [key: string]: IInnerObject;
}

export default function Modal_Project({
  isOpen,
  setIsOpen,
  target,
}: {
  isOpen: Boolean;
  setIsOpen: Dispatch<SetStateAction<Boolean>>;
  target: string;
}) {
  // Project Card별 주소 초기값.
  const [targetObj, setTargetObj] = useState<ITargetObject>({
    financial: {
      git: "https://github.com/KMS9612/financial_ledger",
      path: "",
    },
    aon: {
      git: "https://github.com/KMS9612/aon_system",
      path: "https://aon-system.vercel.app/",
    },
    workout: {
      git: "https://github.com/KMS9612/workout-react",
      path: "https://workout-react.vercel.app/",
    },
    vanilajs: {
      git: "https://github.com/KMS9612/VanilaJS_training",
      path: "https://kmsvanilajs.vercel.app/",
    },
  });

  // 화면에서 클릭된 요소 target을 key로 targetObj에서 값을꺼내서 해당 페이지로 이동시키는 함수
  const onClickMoveToPage = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.innerText === "소스코드 보러가기(Github)") {
      window.open(targetObj[target].git);
    } else {
      window.open(targetObj[target].path);
    }
  };
  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } absolute w-full h-full z-10 bg-gray-300/50`}
      onClick={() => setIsOpen(false)}
    >
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed w-1/4 h-96 rounded-md top-1/2 left-1/2 flex justify-center items-center transform -translate-x-1/2 -translate-y-1/2 bg-white opacity-100 p-10`}
      >
        <div className="flex flex-col gap-10">
          <span className="text-center text-2xl font-bold text-slate-700">
            {target}페이지 이동
          </span>
          <button
            onClick={onClickMoveToPage}
            className="bg-secBrown rounded-full text-white text-xl font-bold w-80 h-12"
          >
            소스코드 보러가기(Github)
          </button>
          <button
            onClick={onClickMoveToPage}
            className={`${
              target === "financial" ? "bg-gray-300" : "bg-secBrown"
            } rounded-full text-white text-xl font-bold w-80 h-12`}
            disabled={target === "financial"}
          >
            {`${
              target !== "financial" ? "배포된 페이지 보러가기" : "배포예정"
            }`}
          </button>
        </div>
      </div>
    </div>
  );
}
