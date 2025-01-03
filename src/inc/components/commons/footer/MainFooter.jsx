import React from "react";
import { useLocation } from "react-router";

const MainFooter = () => {
  /**
   * RRD Helpers
   */
  const location = useLocation();
  return (
    <>
      {!location.pathname.includes("/dashboard") && (
        <footer
          className="bg-inherit border-t-2 border-primary flex flex-col items-center gap-6 md:flex-row justify-between text-white p-16"
          id="main-footer"
        >
          <strong className="text-xl md:text-2xl lg:text-3xl">
            All Rights Reserved &#174;
          </strong>
          <strong className="text-xl md:text-2xl lg:text-3xl">
            Made With &#x2764; By
            <a
              href="//github.com/shubhammauryainfo"
              className="text-primary metal"
              target="_blank"
              rel="noreferrer"
            >
              {""} Nexbytes
            </a>
          </strong>
        </footer>
      )}
    </>
  );
};

export default MainFooter;
