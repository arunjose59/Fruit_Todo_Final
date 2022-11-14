import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import Add from "../add";
import Edit from "../edit";
import { useNavigate } from "react-router-dom";
import "./list.css";

function List() {
  const navigate = useNavigate();

  const [fruitList, setFruitList] = useState([]);
  const [flag, setFlag] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [indexVal, setIndexVal] = useState("");
  const [val, setVal] = useState(false);

  const remove = async (index) => {
    console.log(index);

    const deletes = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: index }),
    };
    const response = await fetch("/fruitlist/delete", deletes).then(
      (response) => response.json()
    );
    setVal(!val);
  };
  function edit(index, name) {
    setFlag(true);
    setEditValue(name);
    setIndexVal(index);
  }
  function Logout() {
    localStorage.setItem("auth", false);

    navigate("/");
  }

  useEffect(() => {
    const fetchData = async () => {
      await fetch("/fruitlist/display")
        .then((response) => response.json())
        .then((resp) => {
          setFruitList(resp);
        });
    };
    fetchData();
  }, [val]);
  return (
    <>
      <div className="logoutButton">
        <Button style={{ color: "black" }} onClick={Logout}>
          Logout
        </Button>
      </div>
      <div className="list">
        {flag && (
          <Edit
            editValue={editValue}
            indexVal={indexVal}
            // fruitList={fruitList}
            // setFruitList={setFruitList}
            setFlag={setFlag}
            val={val}
            setVal={setVal}
          ></Edit>
        )}

        {!flag && (
          <Add
            val={val}
            setVal={setVal}
            fruitList={fruitList}
            setFruitList={setFruitList}
          ></Add>
        )}
        <ol>
          {fruitList.map((item, index) => (
            <li key={index}>
              {item.name}
              {!flag && <Button onClick={() => remove(item.id)}>Remove</Button>}
              <Button onClick={() => edit(item.id, item.name)}>Edit</Button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default List;
