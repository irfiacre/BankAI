/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Link from "next/link";
import { Icon } from "@iconify/react";

const TransactionsTable = ({ data }: { data: any }) => {
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  console.log('-------', data);
  
  return (
    <div className="px-10 py-5">
      <div className="py-2.5 text-textLightColor text-base font-semibold flex flex-row align-middle items-center px-1.5 gap-3.5 cursor-pointer bg-backgroundColor">
        <span className="w-2/4">Account</span>
        <span className="w-2/4">Amount</span>
        <span className="w-2/4">Details</span>
        <span className="w-2/4">Date</span>
      </div>
      <hr />
      <div>
        {data?.result.map((item: any) => (
          <div key={item.id}>
            <div className="flex flex-row align-middle items-center py-2.5 px-1.5 gap-1.5 cursor-pointer hover:bg-backgroundColor">
              <div className="w-2/4">
                <span>{item.account}</span>
              </div>
              <div className="w-2/4">
                <span>
                  {item.credit ? item.credit : item.debit}
                </span>
              </div>
              <div className="text-sm w-2/4">
                <span className="text-textLightColor font-light">
                  {item.narration.substring(0, 30)}
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
      <div className="w-full py-10">
        <Pagination prevPage={1} currentPage={1} nextPage={1} totalPages={1} />
      </div>
    </div>
  );
};

export default TransactionsTable;
