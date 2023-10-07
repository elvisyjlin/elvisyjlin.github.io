import { FC } from "react";
import { NextJSIcon, TailwindCSSIcon, TypeScriptIcon } from "./icons";

const Footer: FC = () => {
  return (
    <footer className="border-t text-zinc-500 border-zinc-500 text-sm sm:text-base py-10 mx-6 sm:mx-20 md:mx-40">
      <div className="flex gap-2 justify-center items-center">
        <span>© 2023 Elvis Lin. Powered by</span>
        <a className="hover:text-zinc-400" href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
          <TypeScriptIcon className="-mt-[3px] sm:-mt-[2px] h-3.5 sm:h-4 fill-current" />
        </a>
        <a className="hover:text-zinc-400" href="https://nextjs.org/" target="_blank" rel="noreferrer">
          <NextJSIcon className="-mt-[3px] sm:-mt-[2px] h-3.5 sm:h-4 fill-current" />
        </a>
        <a className="hover:text-zinc-400" href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <TailwindCSSIcon className="-mt-[3px] sm:-mt-[2px] h-4 sm:h-5 fill-current" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;