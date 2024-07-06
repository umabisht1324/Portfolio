const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 8000;
const router = require("./email");

app.use(cors());
app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
