const { Router } = require("express");
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete } = require("../controllers/user.controller");
const router = Router();

router.get("/", usuariosGet );
router.put("/:idusuario", usuariosPut);
router.post("/", usuariosPost);
router.delete("/", usuariosDelete);

module.exports = router;
