"use client";
import React, { useState } from "react";
import ChatInput from "../ChatInput";
import { Icon } from "@iconify/react";

interface ChatTemplateProps {
  children: any;
  isAsking: boolean;
  handleSendMessage: (message: string) => void;
}

const ChatTemplate = ({
  children,
  isAsking,
  handleSendMessage,
}: ChatTemplateProps) => {
  const [message, setMessage] = useState<string>("");

  const handleInputChange = (e: any) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const handleSend = () => {
    handleSendMessage(message);
    setMessage("");
  };
  
  return (
    <div>
      <div className="px-5 py-5 flex flex-row justify-start items-center gap-5">
        <div>
          <Icon
            icon="mingcute:ai-line"
            fontSize={42}
            className="text-textLightColor"
          />
        </div>
        <div>
          <p className="text-textLightColor text-xl font-light">
            Chat with <strong>Banka</strong>
          </p>
        </div>
      </div>
      <hr />
      <div className="py-1.5 space-y-3 h-[70vh] overflow-auto bg-primary/10">
        {children}
      </div>
      <hr />
      <div className="py-5">
        {isAsking ? (
          <span>Asking</span>
        ) : (
          <ChatInput
            value={message}
            onInputChange={handleInputChange}
            handleSendMessage={handleSend}
          />
        )}
      </div>
    </div>
  );
};

export default ChatTemplate;
