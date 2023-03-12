require("dotenv").config();
const app = require("./app");

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 8081;

// não remova esse endpoint
app.get("/", (_request, response) => {
  response.send();
});

app.listen(port, () => console.log("ouvindo porta", port));
