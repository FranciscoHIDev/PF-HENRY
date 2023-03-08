import React from "react";
import Filters from "../FiltersAndSorts/Filters";

function SideBar() {
  return (
    <React.Fragment>
      <div className=" grid-rows-1 ml-10 mt-20 border-2 w-[180px] px-3 pt-4 bg-slate-200 rounded-lg">
        <Filters />
      </div>
    </React.Fragment>
  );
}

export default SideBar;
