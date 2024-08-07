import { FC } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeRaw from "rehype-raw";

type MyReactMarkdownProps = {
  children: string;
};

const MyReactMarkdown: FC<MyReactMarkdownProps> = ({ children }) => (
  <ReactMarkdown
    className="prose lg:prose-lg max-w-none
    prose-headings:font-semibold prose-headings:mb-0
    prose-p:mt-0 prose-p:mb-3 sm:prose-p:mb-4
    prose-p:leading-6 sm:prose-p:leading-7
    prose-strong:font-normal prose-strong:underline prose-strong:underline-offset-2 sm:prose-strong:underline-offset-[2.5px]
    prose-a:text-orange-900 prose-a:font-normal hover:prose-a:text-orange-600 prose-a:no-underline prose-a:transition prose-a:duration-300"
    linkTarget="_blank"
    rehypePlugins={[rehypeRaw]}
  >{children}</ReactMarkdown>
);

export default MyReactMarkdown;
