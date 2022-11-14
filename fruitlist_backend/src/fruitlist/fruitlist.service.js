const knexInstance = require("../database/connection");

const getlist = async () => {
  const result = await knexInstance("fruitlist").select("*");
  return result;
};

const insertValue = async (data) => {
  // const value = req.body
  const result = await knexInstance("fruitlist").insert({ name: data });
};

const deleteValue = async (deleteId) => {
  const result = await knexInstance("fruitlist").where("id", deleteId).del();
};

const editValue = async (id, name) => {
  const result = await knexInstance("fruitlist")
    .where("id", id)
    .update("name", name);
};
module.exports = { getlist, insertValue, deleteValue, editValue };
