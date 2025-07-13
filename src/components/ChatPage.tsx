"use client";
import React, { useCallback, useLayoutEffect, useState } from "react";
import BaseCard from "./BaseCard";
import ChatPartner from "./chat/ChatPartner";
import ChatTemplate from "./chat/ChatTemplate";
import ChatBubble from "./chat/ChatBubble";

const ChatPage = ({ sender }: { sender: any }) => {
  const [messages, setMessages] = useState<any>([]);

  const handleClickChartPartner = (partner: any) => {};

  useLayoutEffect(() => {
    console.log("------");
  }, []);

  const onSend = useCallback((messageText: string) => {
    console.log("========>");
  }, []);
  console.log(messages);

  return (
    <div>
      <BaseCard className="w-full px-10 py-5">
        <ChatTemplate
          photoUrl={"https://i.pravatar.cc/450?u=23"}
          name={"John Doe"}
          handleSendMessage={onSend}
        >
          {messages.map((msg: any) => (
            <div key={msg._id}>
              <ChatBubble
                name={`${msg.user.firstName} ${msg.user.lastName}`}
                message={msg.text}
                time={msg.createdAt}
                isSent={sender.userId === msg.senderId}
              />
            </div>
          ))}
        </ChatTemplate>
      </BaseCard>
    </div>
  );
};

export default ChatPage;
