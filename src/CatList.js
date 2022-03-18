// write your CatList component here
import React from "react";

const CatList = (props) => {
  return (
    <div>
      {props.catpics.map((pic) => (
        <div>
          <img src={pic.url} />
        </div>
      ))}
    </div>
  );
};

export default CatList;
