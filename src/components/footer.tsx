import { FC } from "react";
import { NextJSIcon, TailwindCSSIcon, TypeScriptIcon } from "./icons";

const Footer: FC = () => {
  return (
    <footer className="border-t text-zinc-500 border-zinc-500 text-sm sm:text-base py-10 mx-6 sm:mx-20 md:mx-40">
      <div className="flex gap-2 justify-center items-center">
        <span className="pl-1">© 2023 Elvis Lin.</span>
      </div>
    </footer>
  );
};

export default Footer;