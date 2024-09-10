import express from "express";
import subject from "../src/routes/subject.js";
import exam from "../src/routes/exam.js";
import nodejs from "../src/routes/nodejs.js";
import mydata from "../src/routes/mydata.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome Mabuhay!");
});

app.use(subject);
app.use(exam);
app.use(nodejs);
app.use(mydata);

// const PORT = 3333;
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log("Server started on port ${PORT}");
});
