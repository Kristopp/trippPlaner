const { cloudinary } = require("../cloudinary/cloudinary");
const express = require("express");
const app = express();
var cors = require("cors");

app.use(express.static("public"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.get("/api/images", async (req, res) => {
  const { resources } = await cloudinary.search
    .expression("folder:dev_setups")
    .sort_by("public_id", "desc")
    .max_results(30)
    .exceute();

  const publicIds = resources.map((file) => file.public_id);
  res.send(publicIds);
});
app.post("/api/upload", async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadResponse = await cloudinary.uploader(fileStr, {
      upload_preset: "dev_setups",
    });
    console.log(uploadResponse);
    res.json({ msg: "yaya" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong" });
  }
});
