import express from 'express';

const app = express();

app.get("/", (request, response) => {
    return response.send("Hello word");
});

app.post("/", (request, response) => {
    return response.json({ message: "oi" });
});
app.listen(3333, () => console.log("Server is running!"));
