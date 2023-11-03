import React, { useState } from "react";

export const Input = ({ handle }) => {
  const [keyword, setKeyword] = useState("");

  const handleSearchField = (e) => {
    e.preventDefault();

    handle(keyword);
  };

  return (
    <form className="flex items-center relative" onSubmit={handleSearchField}>
      <input
        type="text"
        className="w-[370px] ps-3 pe-9 py-1.5 text-sm text-white bg-[#292929] rounded outline-none"
        placeholder="Search .."
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      />
      <button className="absolute right-3 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 hover:stroke-secondary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </form>
  );
};
