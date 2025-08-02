import { Icon } from "@iconify/react";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';


const ChatBubble = ({
  message,
  isAI,
}: //   receiver,
{
  message: string;
  isAI?: boolean;
}) => {
  return (
    <div className="p-2.5">
      <div
        className={`flex items-start gap-2.5 ${
          !isAI ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className={`flex flex-col w-full leading-1.5 p-4 rounded-e-xl rounded-es-xl ${
            isAI ? "bg-white" : "max-w-[320px]"
          }`}
        >
          {isAI ? (
            <ReactMarkdown
             remarkPlugins={[remarkGfm]}
             >{message}</ReactMarkdown>
          ) : (
            <p
              className={`text-base font-normal py-2.5 text-textDarkColor ${
                 "text-black"
              }`}
            >
              {message}
            </p>
          )}
          {isAI && (
            <div
              className={`flex justify-between items-center text-sm font-light ${
                isAI ? "text-borderColorLight" : "text-borderColorLight"
              }`}
            >
              <span className="font-extralight">Banka</span>
              <Icon
                icon="hugeicons:ai-magic"
                fontSize={20}
                className="text-textLightColor"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
