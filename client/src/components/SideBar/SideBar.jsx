import React from "react";
import Filters from "../FiltersAndSorts/Filters";

function SideBar() {
  return (
    <React.Fragment>
      <div className=" static flex ml-10 mt-20 border-2 w-[130px] px-3 pt-4 border-[#fb8500]">
        <Filters />
      </div>
    </React.Fragment>
  );
}

export default SideBar;
