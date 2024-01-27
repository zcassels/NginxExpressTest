import express from "express";

const app = express()
const port = 3000;

console.log(`KUBERNETES_SERVICE_PORT => ${process.env.KUBERNETES_SERVICE_PORT}`)

let counter = 0;

app.get('/', (req, res) => {
  console.log("It working!!!")
  res.send(`<p>Count Test It! : ${counter++}</p><p>Time: ${Date.now()}</p>`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})