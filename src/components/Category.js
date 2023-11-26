import React, { useState } from "react";

const Category = ({ name }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleCategoryClick = () => {
    setIsClicked(true);
  };
  return (
    <div>
      <button
        onClick={() => handleCategoryClick(name)}
        className={`px-5 py-2 m-2 ${
          isClicked ? "bg-slate-500" : "bg-gray-200"
        }  rounded-lg`}
      >
        {name}
      </button>
    </div>
  );
};

export default Category;

/*
previously this component was used to render category, but since we had to handle the active category state
and this component had a simple button and not any complex jsx, we omitted it's usage. Else we had to lift
the state up to let the parent category list component to know about the change in this category component
*/
