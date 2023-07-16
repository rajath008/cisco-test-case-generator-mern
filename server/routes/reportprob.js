var express = require("express");
var router = express.Router();
//
const ImageKit = require("imagekit");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
//
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const axios = require("axios");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use(bodyParser.json());

const countermodel = require("../models/counter");
const accepted = require("../models/feedback");

const imagekit = new ImageKit({
  publicKey: "public_54egNKOJriAp5xKY7+e6SMh+mGo=",
  privateKey: "private_E4UmIvFXD/XV2EIlSIrTwjIgRCA=",
  urlEndpoint: "https://imagekit.io/dashboard/media-library/L01pbmlfcHJvamVjdA",
});
//

const reportprobschema = require("../models/reportproblem");

//
router.get("/", (req, res) => {
  res.send("This is testcase");
});
router.post("/", async (req, res) => {
  console.log("received");
  let id;
  await countermodel.updateOne({ id: "autoval" }, { $inc: { pid: 1 } });
  await countermodel.find({ id: "autoval" }).then((result) => {
    const data = result[0].pid;
    id = result[0].pid;
  });
  const dat = new reportprobschema({
    pid: id,
    qno: req.body.qno,
    sub: req.body.sub,
    ques: req.body.ques,
    testcase: req.body.testcase,
  });
  await dat.save();
  console.log("Saved");
  res.status(200).send(true);
});
router.get("/:sub", (req, res) => {
  reportprobschema.find({ sub: req.params.sub }).then((dat) => {
    res.send(dat);
  });
});
router.get("/accepted/all/:sub", (req, res) => {
  accepted.find({ sub: req.params.sub }).then((dat) => {
    res.send(dat);
  });
});
router.get("/accepted/:pid", async (req, res) => {
  reportprobschema.findOne({ pid: req.params.pid }).then(async (dat) => {
    const data = new accepted({
      pid: req.params.pid,
      qno: dat.qno,
      sub: dat.sub,
      ques: dat.ques,
      testcase: dat.testcase,
    });
    await data.save();
    reportprobschema.deleteOne({ pid: req.params.pid }).then((dat) => {
      res.send(true);
    });
  });
});
router.get("/decline/:pid", async (req, res) => {
  reportprobschema.deleteOne({ pid: req.params.pid }).then((dat) => {
    res.send(true);
  });
});
module.exports = router;
