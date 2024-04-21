import React from "react";

export default function Footer() {
  return (
    <footer className="text-center text-sm py-6">
      <p className="text-gray-700 mb-0">
        Made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        by{" "}
        <a
          className="text-blue-600 hover:underline"
          href="https://github.com/3mrgouda/Platom-System"
          target="_blank"
        >
          @3mrgouda
        </a>
      </p>
    </footer>
  );
}
