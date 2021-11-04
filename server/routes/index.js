import { Router } from "express";

import { categories } from "../controllers/index";

/* import {
  verifyToken,
  verifyRoleSuperAdmin,
} from '../middlewares/authorization'; */

const router = Router();

//return all articulos_lineas
router.route("/articuloslinea").get(categories.getAllArtLines);

//return all categories (articulos_lineas where IdPadre = NULL)
router.route("/categories").get(categories.getArtLineasParents);

//return articulos_lineas by IdPadre
router.route("/articuloslinea/:IdPadre").get(categories.getArtLineasByIdPadre);

export default router;
