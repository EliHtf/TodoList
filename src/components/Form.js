import { useState } from "react";

//component
import List from "./List";

function Form() {
  //states
  const [item, setItem] = useState("");
  const [datas, setDatas] = useState([]);

  //functions

  function changeHandler(event) {
    setItem(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
  }

  function clickHandler() {
    setDatas([...datas, item]);
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <input type="text" placeholder="text ..." onChange={changeHandler} />
        </div>
        <button type="submit" onClick={clickHandler}>
          submit
        </button>
      </form>
      <ul>
        {datas.map((data) => (
          <List key={data} item={data} />
        ))}
      </ul>
    </div>
  );
}

export default Form;
