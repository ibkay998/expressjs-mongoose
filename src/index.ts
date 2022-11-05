import "./lib/db";
import express from "express";
import countryRoutes from "./routes/country";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.json({ message: "Please visit /countries to view all the countries" });
});

app.post('/post', (req,res) => {
  try{
  let result = 0
  console.log(req.body)
  res.status(200).json({
      "slackUsername":"JerryG",
      "result": result,
      "operation_type" : req.body
      // "operation_type": req.body.operation_type
  })
}catch(error){
  res.status(500).json(error)
}
})

app.use("/countries", countryRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
