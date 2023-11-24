import React from "react";

export default function Contact() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-3 mt-5 mb-10">
        <h1 className="text-2xl sm:text-4xl mb-4 font-semibold">Contact Us</h1>
        <p className="mb-10 text-lg">
          Have questions or feedback? We'd love to hear from you. Contact
          Developer{" "}
          <a className="text-green-500" href="mailto: sahusiba485@gmail.com">
            sahusiba485@gmail.com
          </a>
        </p>

        <h1 className="text-2xl sm:text-4xl mb-3 font-semibold">
          Designed and Developed by
        </h1>

        <h2 className="text-2xl mb-2">Sibananda sahu</h2>
        <h3>Fullstack MERN Developer</h3>

        <p className="my-6 text-lg">
          A passionate MERN stack developer with a deep appreciation for
          building robust and scalable web applications. With a foundation in
          MongoDB, Express.js, React, and Node.js
        </p>

        <p className="mb-6 text-lg">
          Connect with sibananda: <br />
          <a className="text-green-800" href="https://github.com/sibananda485">
            Whatsapp |
          </a>
          <a className="text-blue-800" href="https://www.linkedin.com/in/">
            {" "}
            LinkedIn |
          </a>
          <a className="text-orange-800" href="https://github.com/sibananda485">
            {" "}
            Gmail |
          </a>
          <a className="text-teal-800" href="https://github.com/sibananda485">
            {" "}
            Twitter |
          </a>
          <a className="text-cyan-800" href="https://github.com/sibananda485">
            {" "}
            GitHub{" "}
          </a>
        </p>
      </div>
    </>
  );
}
