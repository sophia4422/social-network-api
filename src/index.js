const express = require("express");

// const apiRoutes = require("./routes/api");
// const htmlRoutes = require("./routes/view");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));
// app.use("/api", apiRoutes);
// app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(` listening on http://localhost:${PORT}`);
});
