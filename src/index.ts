import "./lib/db";
import express from "express";
import countryRoutes from "./routes/country";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());


app.get("/", async (req, res) => {
  res.json({ message: "Please visit /countries to view all the countries" });
});

app.post('/posts', (req,res) => {
  let result = 0
  res.status(200).json({
      "slackUsername":"JerryG",
      "result": result,
      "operation_type":req.body.operation_type
      // "operation_type": req.body.operation_type
  })

})

app.use("/countries", countryRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
