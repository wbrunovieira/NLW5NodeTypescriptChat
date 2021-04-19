import express, { request } from 'express';

const app = express();

app.get("/", (request, response) => {
    return response.json({
        message: "Ola NLW5"
    });
});

app.post("/", (request, response) => {
    return response.json({
        message: "Usuario salvo com sucesso!"
    })
})

app.listen(3333, () => console.log("Server in runnig"));