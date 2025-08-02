/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Link from "next/link";
import { Icon } from "@iconify/react";
import BaseCard from "./BaseCard";
import { formatPrice } from '../utils/helpers';

const TransactionsTable = ({ data }: { data: Array<any> }) => {
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <BaseCard className="p-5">
      <div className="py-2.5 font-semibold flex flex-row align-middle items-center px-1.5 gap-3.5 bg-primary/10">
        <span className="w-2/4">Account</span>
        <span className="w-2/4">Amount</span>
        <span className="w-full">Details</span>
        <span className="w-2/4">Date</span>
      </div>
      <hr />
      <div>
        {data?.map((item: any) => (
          <div key={item.id}>
            <div className="flex flex-row align-middle items-center py-2.5 px-1.5 gap-1.5 hover:bg-backgroundColor">
              <div className="w-2/4">
                <span>{item.account}</span>
              </div>
              <div className="w-2/4">
                <span>{formatPrice(item.credit ? item.credit : item.debit)}</span>
              </div>
              <div className="text-sm w-full">
                <span className="text-textLightColor font-light">
                  {item.narration}
                </span>
              </div>
              <div className="w-2/4">
                <span>{item.bookDate ? item.bookDate : item.valueDate}</span>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </BaseCard>
  );
};

export default TransactionsTable;
