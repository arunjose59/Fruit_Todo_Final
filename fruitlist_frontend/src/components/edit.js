import { Button, TextField } from "@mui/material";
import { useState } from "react";
function Edit({ val, setVal, editValue, indexVal, setFlag }) {
  const [changeVal, setChangeVal] = useState("");

  const editValFunc = async () => {
    const edit = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: indexVal, name: changeVal }),
    };

    const response = await fetch(
      "http://localhost:5000/fruitlist/edit",
      edit
    ).then((response) => response.json());
    setVal(!val);
    setFlag(false);
  };

  return (
    <>
      <TextField
        placeholder={editValue}
        onChange={(e) => setChangeVal(e.target.value)}
      ></TextField>
      <Button onClick={editValFunc}>Edit</Button>
    </>
  );
}
export default Edit;
