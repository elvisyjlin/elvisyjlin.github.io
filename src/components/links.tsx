import { FC, HTMLProps } from "react";

export const MyLink: FC<HTMLProps<HTMLAnchorElement>> = ({ ...props }) => {
  return (
    <a
      {...props}
      className={`text-orange-900 hover:text-orange-500 transition duration-300 ${props.className}`}
    >{props.children}</a>
  )
};

export const UnderlineLink: FC<HTMLProps<HTMLAnchorElement>> = ({ ...props }) => {
  return (
    <a
      {...props}
      className={`underline hover:text-zinc-500 transition duration-300 ${props.className}`}
    >{props.children}</a>
  )
};