const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

const app = express();

// // 设置视图引擎
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// 中间件
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 路由
app.use("/users", userRoutes);

// 主页
app.get("/", (req, res) => {
  res.render("index");
});

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
