import ChatPage from "@/src/components/ChatPage";
import TransactionsTable from "@/src/components/TransactionsTable";
import React from "react";

const Page = () => {
  const content: Array<any> = [
    {
      account: "100121980578",
      credit: "2000.0000",
      narration:
        "MTN AIRTIME NEW MOBISERVE : 0786585608 MTN Airtime0786585608 /  - ",
      bookDate: "2024-05-09",
    },
    {
      account: "100121980578",
      credit: "5000.0000",
      narration:
        "MTN AIRTIME NEW MOBISERVE : 0786585608 MTN Airtime0786585608 /  - ",
      bookDate: "2024-05-09",
    },
    {
      account: "100121980578",
      credit: "4000.0000",
      narration:
        "MTN AIRTIME NEW MOBISERVE : 0786585608 MTN Airtime0786585608 /  - ",
      bookDate: "2024-05-09",
    },
    {
      account: "100121980578",
      credit: "3000.0000",
      narration:
        "MTN AIRTIME NEW MOBISERVE : 0786585608 MTN Airtime0786585608 /  - ",
      bookDate: "2024-05-09",
    },
  ];

  return (
    <div className="flex flex-row max-md:flex-col gap-2 text-textDarkColor max-h-svh">
      <div className="w-full">
        <TransactionsTable data={content} />
      </div>
      <div className="w-3/4">
        <ChatPage />
      </div>
    </div>
  );
};

export default Page;
