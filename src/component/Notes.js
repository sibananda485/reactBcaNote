import React from "react";
import { Link, useParams } from "react-router-dom";
import Data from "../Data";
import NoteCard from "./NoteCard";

export default function Notes() {
  const params = useParams();
  return (
    <>
      <div className="mx-auto max-w-7xl px-3">
        <h1 className="my-4 text-lg">
          <Link className="text-blue-600" to="/">
            Home
          </Link>{" "}
          /{" "}
          <Link className="text-blue-600" to={`/${params.semType}`}>
            {params.semType}
          </Link>{" "}
          / {params.sub}{" "}
        </h1>
        <div className="space-y-3">
          {Data[params.semType]
            .find((value) => value.path === params.sub)
            .chapters.map((value, i) => {
              return (
                <>
                  <NoteCard key={i} value={value} />
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}
