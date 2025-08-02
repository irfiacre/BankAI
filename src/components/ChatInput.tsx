import React from "react";
import { Icon } from "@iconify/react";

interface InputProps {
  value: string;
  onInputChange: (e: any) => void;
  handleSendMessage: () => void;
}

const ChatInput = ({ value, onInputChange, handleSendMessage }: InputProps) => {
  return (
    <div>
      <div className="flex items-center px-3 py-2 rounded-lg bg-white">
        <textarea
          id="chat"
          rows={3}
          className="block mx-4 p-2.5 w-full text-sm text-textDarkColor bg-backgroundColor rounded-xl border border-gray-300 focus:outline-none"
          placeholder="Your message..."
          value={value}
          onChange={onInputChange}
        ></textarea>
        <button
          type="button"
          className="inline-flex justify-center px-5 py-3 rounded-full cursor-pointer bg-backgroundColor2 text-textLightColor hover:bg-primary hover:text-white"
          onClick={handleSendMessage}
        >
          <span className="px-2">Send</span>
          <Icon icon="mingcute:send-fill" fontSize={25} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
