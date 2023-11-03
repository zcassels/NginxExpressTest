import express from "express";
const app = express();
const port = 3000;
let counter = 0;
app.get('/', (req, res) => {
    res.send(`<p>Count: ${counter++}</p><p>Time: ${Date.now()}</p>`);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
