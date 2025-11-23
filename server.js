const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const estabelecimentos = require("./data/estabelecimentos.json");

app.get("/estabelecimentos", (req, res) => {
    const categoria = req.query.categoria;
    if (categoria) {
        return res.json(estabelecimentos.filter(e => e.categoria === categoria));
    }
    return res.json(estabelecimentos);
});

app.listen(3001, () => console.log("Backend rodando na porta 3001"));