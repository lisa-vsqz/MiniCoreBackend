const express = require("express");
const router = express.Router();
const {
  getTareas,
  getTareaById,
  createTarea,
  updateTarea,
  deleteTarea,
  getTareasAtrasadas,
} = require("../controllers/TareaController");

// router.get("/", getTareas);
// router.get("/:id", getTareaById);
// router.post("/", createTarea);
// router.put("/:id", updateTarea);
// router.delete("/:id", deleteTarea);

router.get("/atrasadas", getTareasAtrasadas);

module.exports = router;
