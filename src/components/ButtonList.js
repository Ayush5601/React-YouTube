import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const list = [
  "Stand Up Comedy",
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

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item, index) => (
        <Link key={index} to={"/search?q=" + item}>
          <Button name={item} />
        </Link>
      ))}
    </div>
  );
};

export default ButtonList;
