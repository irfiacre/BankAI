"use client";
import React, { useState } from "react";
import Image from "next/image";
import ChatInput from "../ChatInput";

interface ChatTemplateProps {
  photoUrl: string;
  name: string;
  children: any;
  handleSendMessage: (message: string) => void;
}

const ChatTemplate = ({
  photoUrl,
  name,
  children,
  handleSendMessage,
}: ChatTemplateProps) => {
  const [message, setMessage] = useState<string>("");

  const handleInputChange = (e: any) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  return (
    <div>
      <div className="py-3.5 flex flex-row justify-start items-center gap-5">
        <div>
          <Image
            className="rounded-full w-20 h-20 object-cover bg-textLightColor border border-borderColorLight"
            loader={() => photoUrl}
            src={photoUrl}
            alt="Applicant photo"
            height={100}
            width={100}
            unoptimized
          />
        </div>
        <div>
          <p className="text-textLightColor text-lg font-medium">{name}</p>
          <p className="text-sm text-textLightColor font-extralight">
            <span className="absolute mt-1 w-3.5 h-3.5 bg-successGreen rounded-full"></span>
            <span className="ml-5">Online</span>
          </p>
        </div>
      </div>
      <hr />
      <div className="py-1.5 space-y-3 h-[50vh] overflow-auto">{children}</div>
      <hr />
      <div className="py-1.5">
        <ChatInput
          value={message}
          onInputChange={handleInputChange}
          handleSendMessage={() => handleSendMessage(message)}
        />
      </div>
    </div>
  );
};

export default ChatTemplate;
