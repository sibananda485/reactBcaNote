import React from "react";
import SubjectCard from "./subjectCard";
import { Link, useLocation, useParams } from "react-router-dom";
import Data from "../Data";
import Poster from "./Poster";
import Error from "./Error";

export default function Hero() {
  const semester = useParams();
  const pathname = useLocation().pathname;
  return (
    <>
      <Poster />
      <div className="mx-auto max-w-7xl text-center px-3 mb-20">
        <h2 id="1" className="text-3xl my-10 font-semibold">Choose Semester</h2>
        <ul className="flex mb-5 w-[90%] overflow-x-auto sm:mb-10 sm:w-fit mx-auto">
          <li
            className={`sm:text-lg whitespace-nowrap rounded-ss rounded-se border-b-green-800 ${
              pathname === "/" || pathname === "/sem1"
                ? "border border-green-800 border-b-0 "
                : "border-b"
            } px-3 py-1`}
          >
            {" "}
            <Link to="/"> Sem 1 </Link>
          </li>
          <li
            className={`sm:text-lg whitespace-nowrap rounded-ss rounded-se border-b-green-800 ${
              pathname === "/sem2"
                ? "border border-green-800 border-b-0 "
                : "border-b"
            } px-3 py-1`}
          >
            {" "}
            <Link to="/sem2"> Sem 2 </Link>
          </li>
          <li
            className={`sm:text-lg whitespace-nowrap rounded-ss rounded-se border-b-green-800 ${
              pathname === "/sem3"
                ? "border border-green-800 border-b-0 "
                : "border-b"
            } px-3 py-1`}
          >
            {" "}
            <Link to="/sem3"> Sem 3 </Link>
          </li>
          <li
            className={`sm:text-lg whitespace-nowrap rounded-ss rounded-se border-b-green-800 ${
              pathname === "/sem4"
                ? "border border-green-800 border-b-0 "
                : "border-b"
            } px-3 py-1`}
          >
            {" "}
            <Link to="/sem4"> Sem 4 </Link>
          </li>
          <li
            className={`sm:text-lg whitespace-nowrap rounded-ss rounded-se border-b-green-800 ${
              pathname === "/sem5"
                ? "border border-green-800 border-b-0 "
                : "border-b"
            } px-3 py-1`}
          >
            {" "}
            <Link to="/sem5"> Sem 5 </Link>
          </li>
          <li
            className={`sm:text-lg whitespace-nowrap rounded-ss rounded-se border-b-green-800 ${
              pathname === "/sem6"
                ? "border border-green-800 border-b-0 "
                : "border-b"
            } px-3 py-1`}
          >
            {" "}
            <Link to="/sem6"> Sem 6 </Link>
          </li>
        </ul>
        {semester.semType !== undefined &&
        Data[semester.semType] === undefined ? (
          <Error message="Will available soon 🔜"></Error>
        ) : null}
        <div className=" sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {
            // Data[semester.semType] &&
            Data[semester.semType ? semester.semType : "sem1"]?.map(
              (value,i) => {
                return (
                  <>
                    <SubjectCard key={i} data={value} />
                  </>
                );
              }
            )
          }
        </div>
      </div>
    </>
  );
}
