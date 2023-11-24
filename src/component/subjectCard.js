import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function SubjectCard({ data }) {
  const path = useLocation().pathname;
  return (
    <>
      <div className="mb-3 sm:mb-0 flex flex-col justify-between items- border rounded p-4 gap-3">
        <div className="space-y-4">
          <img
            className="rounded-full mx-auto h-40 w-40 object-cover object-center"
            src={data.img}
            alt=""
          />
          <h2 className="text-2xl font-semibold">{data.name}</h2>
        </div>
        <Link
          to={`${path === "/" ? "sem1" : path}/${data.path}`}
          className="bg-green-600 rounded text-white px-2 py-1"
        >
          Browse notes
        </Link>
      </div>
    </>
  );
}
