import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/actions/actions";

function SearchBar({ setPage }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setInput(e.target.value);
    //dispatch(setSearch(input));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setSearch(input));
    setInput("");
    setPage(1);
  }

  function handleOnKeyDown(e) {
    if (e.keyCode === 13) {
      dispatch(setSearch(input));
      setInput("");
      setPage(1);
    }
  }

  return (
    <React.Fragment>
      <div className="flex  mt-[130px] mb-12 flex-wrap  justify-center">
        <div>
          <input
            className="bg-white py-3 pl-4 w-[500px] rounded-l-xl outline-none text-black"
            //focus:border focus:border-[#FB8500] border-1
            type="search"
            name="search"
            value={input}
            placeholder="Search by car make..."
            onKeyDown={(e) => handleOnKeyDown(e)}
            onChange={(e) => handleChange(e)}
          />
          <FiSearch className="text-[#FB8500] absolute mt-[-36px] left-[848px] text-[25px]" />
        </div>
        <button
          className="text-[19px] px-1 rounded-tr-xl rounded-br-xl rounded-bl-none rounded-tl-none"
          onClick={(e) => handleSubmit(e)}
        >
          Search
        </button>
      </div>
    </React.Fragment>
  );
}

export default SearchBar;
