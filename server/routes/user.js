var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require("body-parser");
//
const ImageKit = require("imagekit");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
//
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(bodyParser.json());
const regester = require("../models/user");
const user = require("../models/user");
const countermodel = require("../models/counter");
const reportproblem = require("../models/reportproblem");
const problem = require("../models/problem");
const counter = require("../models/counter");
const imagekit = new ImageKit({
  publicKey: "public_54egNKOJriAp5xKY7+e6SMh+mGo=",
  privateKey: "private_E4UmIvFXD/XV2EIlSIrTwjIgRCA=",
  urlEndpoint: "https://imagekit.io/dashboard/media-library/L01pbmlfcHJvamVjdA",
});
router.post("/signup", upload.single("file"), async (req, res) => {
  console.log("received for signup");
  try {
    console.log("received");
    const file = req.file;
    const data = JSON.parse(req.body.data);
    const name = data.name;
    const usn = data.usn;
    const password = data.password;
    const passwordHash = await bcrypt.hash(password, 10);
    const response = await imagekit.upload({
      file: file.buffer,
      fileName: file.originalname,
    });
    console.log(response.url);
    const imageurl = response.url;
    ///////////////////////////////////
    const User = await user.findOne({ usn });
    // res.send(User === null);
    if (User === null) {
      let uid;
      await countermodel.updateOne({ id: "autoval" }, { $inc: { seq: 1 } });
      await countermodel.find({ id: "autoval" }).then((result) => {
        const data = result[0].seq;
        uid = result[0].seq;
      });
      const dat = new user({
        uid: uid,
        name: name,
        usn: usn,
        password: passwordHash,
        imageurl: imageurl,
      });
      // res.send(dat);
      console.log(dat);
      dat.save();
      const token = jwt.sign({ usn }, "jwtsecret", { expiresIn: 800 });
      console.log(token);
      res.json({ auth: true, token: token, url: response.url });
    } else {
      console.log("already present bro");
      res.send({ auth: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error uploading file" });
  }
});
router.get("/:pid", async (req, res) => {
  await user.findOne({ usn: req.params.pid }).then((dat) => {
    console.log(dat);
    res.send(dat);
  });
});
router.get("/count", async (req, res) => {
  await countermodel.updateOne({ id: "autoval" }, { $set: { pid: 1 } });
  res.send("OK");
});
//////////////////////////////////////////////////       LOGIN          //////////////////////////////////////////////////////
router.post("/login", async (req, res) => {
  const phone1 = req.body.phone;
  const password = req.body.password;
  console.log(phone1);
  console.log(password);
  let uid = 1;
  const User = await user.findOne({ phone: phone1 });
  console.log(User);
  const Passwordcorrect =
    User === null ? false : await bcrypt.compare(password, User.password);
  if (!(User && Passwordcorrect)) {
    return res.status(401).json({
      error: "invalid phone or Password",
    });
  } else {
    const phone = User.phone;
    const token = jwt.sign({ phone }, "jwtsecret", { expiresIn: 800 });
    return res.json({ auth: true, token: token, uid: User.uid });
  }
});
//////////////////////////////////////////////           to check if authenticated        ////////////////////////////////////////////////
const verifyJwt = (req, res, next) => {
  const token = req.headers["x-access-token"];
  console.log("Came for verification");
  if (!token) {
    res.send("Sorry bro no token");
  } else {
    jwt.verify(token, "jwtsecret", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "U fail to auth bro " });
        console.log("notauthorised");
      } else {
        console.log("authorsed");
        req.userId = decoded.id;
        next();
      }
    });
  }
};
router.get("/isUserAuth", verifyJwt, (req, res) => {
  res.json({ auth: true });
});
/////////////////////////         full Details          ////////////////////
router.post("/details", async (req, res) => {
  const uid = req.body.uid;
  const response = await user.findOne({ uid: uid });
  console.log(response);
  // res.json({ auth: uid });
  res.send(response);
});
router.post("/reported/count", async (req, res) => {
  const uid = req.body.uid;
  console.log(uid);
  // const response = await problem.findOne({ uid: uid });
  // // res.json({ auth: uid });
  // if (response == null) res.send("0");
  // else res.send(response.length);
  const response = await problem.find({ uid: uid });
  res.send({ ans: response.length });
});
router.get("/userdetails/:uid", (req, res) => {
  problem.find({ uid: req.params.uid }).then((result) => {
    if (result == null) {
      res.send(null);
      return;
    }
    const arr = [];
    result.map((response) => {
      const dat = {
        pid: response.pid,
        uid: response.uid,
        name: response.name,
        description: response.description,
        latitude: response.latitude,
        longitude: response.longitude,
        formatdate: response.formatdate,
        status: response.status,
        imageurl: response.imageurl,
        department: response.department,
      };
      arr.push(dat);
    });
    // console.log(arr);
    res.send(arr);
  });
});
module.exports = router;
