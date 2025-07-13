"use client";
import { get_data } from "@/src/service";
import Dashboard from "@/src/views/Dashboard";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [state, setState] = useState<any>({
    title: "",
    notes: "",
    fileMetadata: null,
  });
  const [file, setFile] = useState<any>(null);
  const [fileContent, setFileContent] = useState<Array<any>>([]);

  const handleImageChange = (e: any) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    (async () => {
      const result = await get_data("statement");
      setFileContent(result);
    })();
  }, [file]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-gray-700">
      <section></section>
      {!file ? (
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
              className={`cursor-pointer p-5 ${state.file ? "bg-backgroundColor" : "bg-primary/5"
                } border border-borderColorLight rounded-md`}
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
      ) : (
        <Dashboard content={fileContent} />
      )}
      <section></section>
    </main>
  );
}
