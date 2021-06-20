const express = require("express");
const app = express();
const crypto = require("crypto");
const cors = require("cors");
const UrlObject = require("./models/url.js");

const requestLogger = (req, res, next) => {
  console.log(req.method);
  console.log(req.path);
  console.log(req.body);
  console.log("-----");
  next();
};

app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(requestLogger);

app.post("/shorten", (req, res, next) => {
  const uuid = crypto.randomBytes(3).toString("hex");
  let url = req.body.url;
  let regexp = new RegExp("^https?://");
  if (!regexp.test(url)) {
    url = "http://" + url;
  }
  const urlObject = new UrlObject({
    url: url,
    uuid: uuid,
  });

  urlObject
    .save()
    .then((returnedObject) => {
      res.send(returnedObject);
    })
    .catch((err) => next(err));
});

app.get("/:uuid", (req, res, next) => {
  const uuid = req.params.uuid;
  UrlObject.findOne({ uuid: uuid })
    .then((returnedObject) => {
      res.status(301).redirect(returnedObject.url);
    })
    .catch((err) => next(err));
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
