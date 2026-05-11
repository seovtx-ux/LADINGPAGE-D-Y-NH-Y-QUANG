import https from "https";
import fs from "fs";

https.get("https://storage.googleapis.com/aistudio-user-content/2026-05-11/o/2c7a3ff99c4ffea003bd922aa1263d9136ca895a6f2bb60cbbeab3ca961a520e.png", (res) => {
  console.log("Status without alt=media:", res.statusCode);
});

https.get("https://storage.googleapis.com/aistudio-user-content/2026-05-11/o/2c7a3ff99c4ffea003bd922aa1263d9136ca895a6f2bb60cbbeab3ca961a520e.png?alt=media", (res) => {
  console.log("Status with alt=media:", res.statusCode);
});
