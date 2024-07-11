import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Pagination = ({pageNo, handlePrev, handleNext}) => {
  return (
    <div className="bottom-0  text-center text-white bg-black bg-opacity-50 py-2 ">
      <div className="flex justify-center">
        <div className="hover:scale-125 hover:cursor-pointer duration-300">
          <FontAwesomeIcon onClick={handlePrev} className="px-8" icon={faArrowLeft} />
        </div>
        <div>{pageNo}</div>
        <div className="hover:scale-125 hover:cursor-pointer duration-300">
          <FontAwesomeIcon onClick={handleNext} className="px-8" icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
