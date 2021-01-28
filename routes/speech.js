const express = require("express");
const router = express.Router();
//Getting All
router.get("/speech", async (req, res) => {
  try {
    res.json([
      "http://localhost:4000/api/speech",
      {
        bucket: "meeting",
        key: "010819/test@vais.vn/LxTeEJabUZ9i4pZT4KRrEo.wav",
        policy:
          "eyJleHBpcmF0aW9uIjogIjIwMTktMDgtMDFUMTI6NTg6NTYuMDAwWiIsICJjb25kaXRpb25zIjogW1siZXEiLCAiJGJ1Y2tldCIsICJtZWV0aW5nIl0sIFsic3RhcnRzLXdpdGgiLCAiJGtleSIsICIwMTA4MTkvdm5wdGl0QHZhaXMudm4vTHhUZUVKYWJVWjlpNHBaVDRLUnJFby53YXYiXSwgWyJlcSIsICIkeC1hbXotZGF0ZSIsICIyMDE5MDgwMVQwMjU4NTZaIl0sIFsiZXEiLCAiJHgtYW16LWFsZ29yaXRobSIsICJBV1M0LUhNQUMtU0hBMjU2Il0sIFsiZXEiLCAiJHgtYW16LWNyZWRlbnRpYWwiLCAiQUtJQUlPU0ZPRE5ON0VYQU1WQUkvMjAxOTA4MDEvdXMtZWFzdC0xL3MzL2F3czRfcmVxdWVzdCJdLCBbImNvbnRlbnQtbGVuZ3RoLXJhbmdlIiwgMTAsIDEwNzM3NDE4MjRdXX0=",
        "x-amz-algorithm": "AWS4-HMAC-SHA256",
        "x-amz-credential":
          "AKIAIOSFODNN7EXAMVAI/20190801/us-east-1/s3/aws4_request",
        "x-amz-date": "20190801T025856Z",
        "x-amz-signature":
          "f36055de4d5b85281c91980acc195438e564b8a8a7051ad0685fe2dc68cb591d",
      },
    ]);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.post("/speech/token", async (req, res) => {
  try {
    let token = req.headers["token"];
    res.status(200).json({ access_token: token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
router.post("/speech/createMeetingUploadURL", async (req, res) => {
  try {
    // let token = req.header.token;
    res.status(200).json([
      "http://localhost:4000/api/speech",
      {
        bucket: "meeting",
        key: "010819/test@vais.vn/LxTeEJabUZ9i4pZT4KRrEo.wav",
        policy:
          "eyJleHBpcmF0aW9uIjogIjIwMTktMDgtMDFUMTI6NTg6NTYuMDAwWiIsICJjb25kaXRpb25zIjogW1siZXEiLCAiJGJ1Y2tldCIsICJtZWV0aW5nIl0sIFsic3RhcnRzLXdpdGgiLCAiJGtleSIsICIwMTA4MTkvdm5wdGl0QHZhaXMudm4vTHhUZUVKYWJVWjlpNHBaVDRLUnJFby53YXYiXSwgWyJlcSIsICIkeC1hbXotZGF0ZSIsICIyMDE5MDgwMVQwMjU4NTZaIl0sIFsiZXEiLCAiJHgtYW16LWFsZ29yaXRobSIsICJBV1M0LUhNQUMtU0hBMjU2Il0sIFsiZXEiLCAiJHgtYW16LWNyZWRlbnRpYWwiLCAiQUtJQUlPU0ZPRE5ON0VYQU1WQUkvMjAxOTA4MDEvdXMtZWFzdC0xL3MzL2F3czRfcmVxdWVzdCJdLCBbImNvbnRlbnQtbGVuZ3RoLXJhbmdlIiwgMTAsIDEwNzM3NDE4MjRdXX0=",
        "x-amz-algorithm": "AWS4-HMAC-SHA256",
        "x-amz-credential":
          "AKIAIOSFODNN7EXAMVAI/20190801/us-east-1/s3/aws4_request",
        "x-amz-date": "20190801T025856Z",
        "x-amz-signature":
          "f36055de4d5b85281c91980acc195438e564b8a8a7051ad0685fe2dc68cb591d",
      },
    ]);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
router.post("/speech/meeting", async (req, res) => {
  try {
    res.status(200).json({ id: "1" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
router.get("/speech/transcription", async (req, res) => {
  try {
    let file = require("fs");
    let transcription = file.readFileSync(
      "E:\\API\\server\\file\\2020-09-1114-54-19608.json",
      "utf-8"
    );
    let tran = JSON.parse(transcription);
    res.json(tran);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.get("/speech/meeting", async (req, res) => {
  try {
    setTimeout(() => {
      console.log("status");
    }, 2000);
    res.json({ status: 5 });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.post("/speech/speaker", async (req, res) => {
  try {
    let file = require("fs");
    let transcription = file.readFileSync(
      "E:\\API\\server\\file\\2020-09-1114-54-19608_sp.json",
      "utf-8"
    );
    let tran = JSON.parse(transcription);
    res.json(tran);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
