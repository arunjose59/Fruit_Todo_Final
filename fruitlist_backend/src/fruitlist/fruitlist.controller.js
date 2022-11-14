const {
  getlist,
  insertValue,
  deleteValue,
  editValue,
} = require("./fruitlist.service");

const read = async (req, res, next) => {
  const foundItem = await getlist();
  res.json(foundItem);
};

const insert = async (req, res, next) => {
  const data = req.body.name;
  const insert = await insertValue(data);
  res.json({ data: insert });
};

const del = async (req, res, next) => {
  const deleteId = req.body.id;
  const del = await deleteValue(deleteId);
  res.json({ data: del });
};

const edit = async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const editItem = await editValue(id, name);
  res.json("success");
};
module.exports = { read, insert, del, edit };
