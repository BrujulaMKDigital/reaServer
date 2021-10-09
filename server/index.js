import express from "express";
import morgan from "morgan";
import cors from "cors";

import dataBase from "../config/database";
import routes from "./routes/index";
import { PORT } from "../config/config";

const server = express();

server.use(cors());
server.use(morgan("dev"));
server.use(
  express.json({
    limit: "50mb",
  })
);

server.use("/api/rea", routes);

server.listen(PORT, () => {
  console.log("Servidor esta corriendo en el puerto", PORT);
});

/* server.use('/apidoc', express.static(__dirname + '/apidoc'));
server.use('/public', express.static(__dirname + '/public'));
 */
export default server;
