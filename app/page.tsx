"use client";
import { get_data } from "@/src/service";
import { setContent } from "@/store/reducers/content";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [state, setState] = useState<any>({
    title: "",
    notes: "",
    fileMetadata: null,
  });
  const [file, setFile] = useState<any>(null);
  const dispatch = useDispatch();
  const contentStore = useSelector((state: any) => state.content);
  const router = useRouter();

  const handleImageChange = (e: any) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    (async () => {
      const result = await get_data("statement");
      dispatch(setContent(result));
    })();
  }, [file]);

  if (contentStore.content) {
    router.push("/analyze");
  }

  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-between p-24 text-gray-700">
        <section></section>

        <section className="flex space-y-5 items-center justify-center flex-col">
          <h1 className="text-5xl">
            {" "}
            Welcome to <strong className="">
              {" "}
              Bank Statement Analyzer{" "}
            </strong>{" "}
          </h1>
          <h1 className="text-2xl text-gray-400 text-center font-light">
            {" "}
            - Get started By Uploading your Bank Statement -{" "}
          </h1>
          <div className="w-full">
            <div
              className={`cursor-pointer p-5 border border-borderColorLight rounded-md`}
            >
              <input
                type="file"
                name="file"
                onChange={handleImageChange}
                className="cursor-pointer"
                accept=".csv"
                disabled={!!state.file}
              />
              {!state.file && (
                <span className="w-full text-xs text-gray-400 font-normal">
                  File must be .csv (ex: bank_statement.csv) 😅
                </span>
              )}
            </div>
          </div>
        </section>
        <section></section>
      </div>
    </main>
  );
}
