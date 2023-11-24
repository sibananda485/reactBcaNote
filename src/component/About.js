import React from "react";

export default function About() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-3 mb-10">
        <h1 className="text-2xl sm:text-4xl font-semibold mt-4 mb-3">
          About sahyogbca.shop
        </h1>
        <p className="sm:text-lg">
          This website is developed for educational purpose only.This contains
          all subjects PDF notes for BCA students of Kavikulaguru Kalidas
          Sanskrit University(KKSU),nagpur. All notes are strongly
          Prepared/owned by{" "}
          <span className="font-semibold">Sahyog College</span>.
        </p>
        <h1 className="text-2xl sm:text-4xl font-semibold mt-10 mb-6">
          Technology Used
        </h1>
        <h2 className="text-xl sm:text-2xl mb-2 text-slate-800 font-semibold mt-2">
          Tailwind CSS
        </h2>
        <p className="sm:text-lg">
          Tailwind Css utility class used to create stunnning, attractive user
          interface.it helped to bulid resopnsive mobile fast.
        </p>
        <h2 className="text-xl sm:text-2xl mb-2 text-slate-800 font-semibold mt-2">
          React JS
        </h2>
        <p className="sm:text-lg">
          Modern Javascript library is used to built the complex reused
          component super easily. It also helped to give a single page
          application exprerience with out reloading page like a mobile app.
        </p>
        <h2 className="text-xl sm:text-2xl mb-2 text-slate-800 font-semibold mt-2">
          Vercel
        </h2>
        <p className="sm:text-lg">
          Hosting and deployment done by Vercel with out headache of Built file
          of react app and easily mapped with our custom domain sahyogbca.shop
        </p>
      </div>
    </>
  );
}
