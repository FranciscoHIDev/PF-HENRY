import React from "react";

function Pagination({ cars, carPerPage, paginate }) {
  const pagesNumbers = [];
  const numberPages = Math.ceil(cars / carPerPage);

  for (let i = 0; i < numberPages; i++) {
    pagesNumbers.push(i + 1);
  }

  return (
    <React.Fragment>
      <nav className="flex justify-center">
        {pagesNumbers?.map((num) => (
          <button
            className="m-1 text-xl focus:bg-violet-700"
            key={crypto.randomUUID()}
            onClick={(e) => paginate(e, num)}
          >
            {num}
          </button>
        ))}
      </nav>
    </React.Fragment>
  );
}

export default Pagination;
