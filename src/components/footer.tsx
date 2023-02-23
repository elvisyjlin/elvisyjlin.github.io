import { FC } from "react";
import { NextJSIcon, TailwindCSSIcon, TypeScriptIcon } from "./icons";

const Footer: FC = () => {
  return (
    <footer className="h-40 border-t text-neutral-500 border-neutral-500 text-sm pt-10 mx-6 sm:mx-20 md:mx-40">
      <div className="flex gap-2 justify-center items-center">
        <span>© 2023 Elvis Lin. Powered by</span>
        <a className="hover:text-neutral-400" href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
          <TypeScriptIcon className="h-4 fill-current" />
        </a>
        <a className="hover:text-neutral-400" href="https://nextjs.org/" target="_blank" rel="noreferrer">
          <NextJSIcon className="h-4 fill-current" />
        </a>
        <a className="hover:text-neutral-400" href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <TailwindCSSIcon className="h-5 fill-current" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;