import { MouseEvent } from "react";

export default function SideBar({
  onClickSideMenu,
}: {
  onClickSideMenu: (e: MouseEvent<HTMLLIElement>) => void;
}) {
  return (
    <div className="fixed w-24 border-2 border-secBrown rounded-md top-1/2 left-1 py-2 bg-white">
      <ul className="divide-y-2 font-bold text-gray-700">
        <li
          onClick={onClickSideMenu}
          className="cursor-pointer transition ease-in-out duration-600 hover:translate-x-1"
        >
          Main
        </li>
        <li
          onClick={onClickSideMenu}
          className="cursor-pointer transition ease-in-out duration-600 hover:translate-x-1"
        >
          About Me
        </li>
        <li
          onClick={onClickSideMenu}
          className="cursor-pointer transition ease-in-out duration-600 hover:translate-x-1"
        >
          Project
        </li>
        <li
          onClick={onClickSideMenu}
          className="cursor-pointer transition ease-in-out duration-600 hover:translate-x-1"
        >
          Contact
        </li>
      </ul>
    </div>
  );
}
