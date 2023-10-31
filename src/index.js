const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config");

const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect(config.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const filmSchema = new mongoose.Schema({
  title: String,
  description: String,
  image_url: String,
  trailer_url: String,
});

const Film = mongoose.model("Film", filmSchema);

app.get("/", async (req, res) => {
  try {
    const films = await Film.find();
    return res.send(films);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Erro ao buscar filmes.");
  }
});

app.post("/", async (req, res) => {
  try {
    const film = new Film({
      title: req.body.title,
      description: req.body.description,
      image_url: req.body.image_url,
      trailer_url: req.body.trailer_url,
    });

    await film.save();
    return res.send(film);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Erro ao criar um filme.");
  }
});

app.put("/:id", async (req, res) => {
  try {
    const film = await Film.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url,
      },
      {
        new: true,
      }
    );

    return res.send(film);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Erro ao atualizar um filme.");
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const film = await Film.findByIdAndRemove(req.params.id);
    return res.send(film);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Erro ao excluir um filme.");
  }
});

app.listen(port, () => {
  console.log("App running");
});
