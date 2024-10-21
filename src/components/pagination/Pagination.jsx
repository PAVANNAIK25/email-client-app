import React, { useEffect } from "react";

const Pagination = ({ totalPages, pageNumber }) => {
  return (
    <div>
      <ul>
        {Array.from({ length: totalPages.number }, (_, i) => {
          <li key={i + 1}>{i + 1}</li>;
        })}
      </ul>
    </div>
  );
};

export default Pagination;
