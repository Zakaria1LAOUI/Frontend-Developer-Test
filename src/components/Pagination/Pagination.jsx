import React from "react";
import "./Pagination.css";

const Pagination = ({ currentPage, setPage }) => {
  const totalPages = 42; // Assuming 42 pages available from the API
  const pageNumbers = [currentPage - 1, currentPage, currentPage + 1, currentPage + 2].filter(
    (num) => num > 0 && num <= totalPages
  );

  const handlePageClick = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setPage(pageNum);
    }
  };

  return (
    <div className="pagination">
      {/* Left Arrow */}
      <button onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}>
        &lt;
      </button>

      {/* Displaying 4 page numbers */}
      {pageNumbers.map((num) => (
        <button
          key={num}
          onClick={() => handlePageClick(num)}
          className={num === currentPage ? "active" : ""}
        >
          {num}
        </button>
      ))}

      {/* Right Arrow */}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
