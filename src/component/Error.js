import React from "react";

export default function Error({ message }) {
  return (
    <>
      <div className="w-fit mt-16 mx-auto mb-40">
        <div className="text-center text-2xl sm:text-4xl text-red-600">
          Error
        </div>
        <br />
        <br />
        <div className="text-center text-2xl sm:text-4xl text-green-800">
          {message}
        </div>
      </div>
    </>
  );
}
