import React, { useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";

export const Pagination = ({ page }) => {
  const [active, setActive] = useState(1);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => {
      setActive(index);
      page(index);
    },
  });

  const next = () => {
    if (active === 5) return;
    setActive(active + 1);
    page(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
    page(active - 1);
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2 text-secondary"
        onClick={prev}
        disabled={active === 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          className="w-4 h-4 stroke-secondary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        <span>Previous</span>
      </Button>
      <div className="flex items-center gap-2">
        <IconButton className="text-secondary" {...getItemProps(1)}>
          1
        </IconButton>
        <IconButton className="text-secondary" {...getItemProps(2)}>
          2
        </IconButton>
        <IconButton className="text-secondary" {...getItemProps(3)}>
          3
        </IconButton>
        <IconButton className="text-secondary" {...getItemProps(4)}>
          4
        </IconButton>
        <IconButton className="text-secondary" {...getItemProps(5)}>
          5
        </IconButton>
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2 text-secondary"
        onClick={next}
        disabled={active === 5}
      >
        <span>Next</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          className="w-4 h-4 stroke-secondary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </Button>
    </div>
  );
};
