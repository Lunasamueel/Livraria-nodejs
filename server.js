import "dotenv/config";
import { log } from "console";

import app from "./src/app.js";
const PORT = 3000;

app.listen(PORT, () => {
  log("estou ouvindo!");
});
