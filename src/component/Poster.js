import React from "react";

export default function Poster() {
  return (
    <>
      <div className="poster  h-64 sm:h-[80vh] text-white flex flex-col justify-center items-center gap-11">
        <h1 className="text-2xl  sm:text-5xl  sm:w-[60%] text-center">
          {" "}
          All PDFs are at one place{" "}
          <span className="text-orange-300 font-semibold">sahyogbca.shop</span>
        </h1>
        <p className="hidden sm:block w-[70%] sm:leading-10 text-center sm:text-xl">
          Don't worry to find your study material and stop asking to CR and your
          friends to send you ! sahyogbca.shop is Developed for you to view and
          download all semester notes and previous year question paper of all subjects with chapter wise Prepared by
          sahyog
        </p>
        <button className="sm:text-2xl px-5 py-2 rounded bg-sky-700">
          Browse Notes Now &#8595;
        </button>
      </div>
    </>
  );
}
