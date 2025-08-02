"use client";
import React from "react";
import ChatPage from "@/src/components/ChatPage";
import TransactionsTable from "@/src/components/TransactionsTable";
import { Layout, Model } from "flexlayout-react";
import "flexlayout-react/style/rounded.css";
import { flexConfiguration } from "@/src/utils/helpers";

const model = Model.fromJson(flexConfiguration);

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

  const factory = (node: any) => {
    const component = node.getComponent();

    if (component === "chat") {
      return <ChatPage />;
    }
    return <TransactionsTable data={content} />;
  };

  return <Layout model={model} factory={factory} realtimeResize={true} />;
};

export default Page;
