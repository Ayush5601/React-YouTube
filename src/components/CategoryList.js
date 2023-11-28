import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../utils/categorySlice";

const list = [
  "All",
  "Comedy",
  "Music",
  "Cricket",
  "Tennis",
  "Coding",
  "Movies",
  "Experiments",
  "Cooking",
  "Sports",
  "Gaming",
  "Trailers",
];

const CategoryList = () => {
  var category = useSelector((store) => store.category?.categoryName);
  const [activeCategory, setActiveCategory] = useState(
    category ? category : "All"
  );
  const dispatch = useDispatch();

  console.log(activeCategory);
  const handleCategoryClick = (item) => {
    setActiveCategory(item);
    dispatch(setCategory(item));
  };

  return (
    <div className="flex">
      {list.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => handleCategoryClick(item)}
            className={`px-5 py-2 m-2 ${
              activeCategory === item ? "bg-slate-400" : "bg-gray-200"
            }  rounded-lg`}
          >
            {item}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;

/*
we are displaying categories on the same homePage now
previously a Link was used to just navigate to the results page just like the search functionality
*/
