import { Router } from "express";

import { categories } from "../controllers/index";

/* import {
  verifyToken,
  verifyRoleSuperAdmin,
} from '../middlewares/authorization'; */

const router = Router();

//categories
router.route("/categories").get(categories.getAllCategories);

export default router;
