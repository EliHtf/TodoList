import { useState } from "react";

function List({ item }) {
  const [isShow, setIsShow] = useState(true);

  function clickHandler() {
    setIsShow(false);
  }
  return (
    <>
      {isShow && (
        <li style={{ display: "flex" }}>
          <span>{item}</span>
          <button onClick={clickHandler}>&times;</button>
        </li>
      )}
    </>
  );
}

export default List;
