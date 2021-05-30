const router = require("express").Router();
const request = require("request");
const googleBooks = require("../api/google-book-api");
const parseApiData = require("../utils/parseApiData");

router.post("/getBooks", (req, res) => {
  let serchParameter = req.body.name;
  if (serchParameter.trim().length === 0) {
    res.status(400).send({ message: "name is empty" });
  } else {
    try {
      request.get(googleBooks(serchParameter), (error, request, body) => {
        let books = JSON.parse(body);
        res.status(200).send(parseApiData(books));
      });
    } catch (error) {
      res.status(400).send({ message: error });
    }
  }
});
module.exports = router;
