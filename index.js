const express = require("express");
const app = express();
const cors = require("cors");
// const port = process.env.PORT || 8080;
const port = 5000 || 8080;
const httpStatus = require("http-status");
const connectDB = require("./server");
const routes = require("./src/routes/routes");
const globalErrorHandler = require("./src/middleware/global.error.handler");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Ecommerce App is working! YaY !");
});

// Import All Api
app.use("/api/v1", routes);

//global error handler
app.use(globalErrorHandler);

//handle not found
app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API Not Found",
      },
    ],
  });
  next();
});

connectDB();

app.listen(port, () => {
  console.log(`Ecommerce app is running on port ${port}`);
});

// index.js -> routes -> route -> controllers -> services -> models.
