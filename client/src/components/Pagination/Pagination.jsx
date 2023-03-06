import React from "react";

function Pagination({ cars, carPerPage, paginate, page, setPage, maxPage }) {
  const pagesNumbers = [];
  const numberPages = Math.ceil(cars / carPerPage);

  for (let i = 0; i < numberPages; i++) {
    pagesNumbers.push(i + 1);
  }

  function Prev() {
    setPage(page - 1);
  }

  function Next() {
    setPage(page + 1);
  }

  return (
    <React.Fragment>
      <nav className="flex justify-center">
        <button
          className=" m-1 text-xl px-2"
          disabled={page === 1}
          onClick={Prev}
        >{`«`}</button>
        {pagesNumbers?.map((num) => (
          <button
            className="m-1  text-xl focus:bg-violet-700"
            key={crypto.randomUUID()}
            onClick={(e) => paginate(e, num)}
          >
            {num}
          </button>
        ))}
        <button
          className=" m-1 text-xl px-2"
          disabled={page === maxPage}
          onClick={Next}
        >{`»`}</button>
      </nav>
    </React.Fragment>
  );
}

export default Pagination;
