const PORT = 5000;
const app = require("./app");
const listener = () => console.log("Listening");
app.listen(PORT, listener);
