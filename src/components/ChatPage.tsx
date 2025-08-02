"use client";
import React, { useCallback, useLayoutEffect, useState } from "react";
import BaseCard from "./BaseCard";
import ChatPartner from "./chat/ChatPartner";
import ChatTemplate from "./chat/ChatTemplate";
import ChatBubble from "./chat/ChatBubble";
import { ask_question } from "../service";
interface Message {
  text: string;
  isAI: boolean;
}
const ChatPage = () => {
  const [messages, setMessages] = useState<Array<Message>>([]);
  const [asking, setAsking] = useState<boolean>(false);

  useLayoutEffect(() => {
    console.log("------");
  }, []);

  const onSend = useCallback(async (messageText: string) => {
    setMessages((prevState: Array<Message>) => [
      ...prevState,
      {
        text: messageText,
        isAI: false,
      },
    ]);
    setAsking(true);
    const response = await ask_question(messageText);
    setAsking(false);
    console.log("---->", response.answer);
    
    setMessages((prevState: Array<Message>) => [
      ...prevState,
      {
        text: response.answer,
        isAI: true,
      },
    ]);
  }, []);


  return (
    <div>
      <BaseCard className="w-full">
        <ChatTemplate handleSendMessage={onSend} isAsking={asking}>
          {messages.map((msg: any) => (
            <div key={msg._id}>
              <ChatBubble message={msg.text} isAI={msg.isAI} />
            </div>
          ))}
        </ChatTemplate>
      </BaseCard>
    </div>
  );
};

export default ChatPage;
