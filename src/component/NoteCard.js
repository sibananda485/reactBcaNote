import React from "react";

export default function NoteCard({ value }) {
  return (
    <>
      <div className="border flex flex-col items-center gap-5 p-4">
        <h1 className="font-semibold text-center text-xl">{value.name}</h1>
        <a
          rel="noopener noreferrer"
          className="text-sky-800"
          target="_blank"
          href="https://sahyogcollege.com/"
        >
          Source - Sahyog Collge
        </a>
        <div className="flex gap-3">
          <a
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-2 rounded py-1"
            href={value.down}
          >
            Download
          </a>
          <a
            className="bg-green-600 text-white px-2 rounded py-1"
            href={value.view}
          >
            view
          </a>
        </div>
      </div>
    </>
  );
}
