import React from "react";

const Pagination = ({ page, setPage, hasNextPage }) => {
  const handleNextPage = () => setPage(page + 1);
  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="pagination-container">
      <button
        onClick={handlePrevPage}
        disabled={page === 1}
        className="pagination-button"
      >
        Previous
      </button>
      <button
        onClick={handleNextPage}
        disabled={!hasNextPage}
        className="pagination-button"
      >
        Next
      </button>
      <p>Page {page}</p>
    </div>
  );
};

export default Pagination;
