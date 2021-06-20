require("dotenv").config();
const mongoose = require("mongoose");

const url = process.env.MONGOURI;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.log(err));

const urlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  uuid: {
    type: String,
    minLength: 6,
    required: true,
  },
});

urlSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("URL", urlSchema);
