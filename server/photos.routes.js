const { Router } = require("express");
const { uploadFile, readFile } = require("./s3");
const router = Router();

router.get("/", (req, res) => {
  res.send("Hola desde la ruta de fotos");
});

router.post("/upload", async (req, res) => {
  console.log(req.files["photo"].tempFilePath);
  const result = await uploadFile(req.files["photo"]);

  console.log(result);

  res.send("Subiendo imagen");
});

router.get("/archivo/:fileName", async (req, res) => {
  try {
    const result = await readFile(req.params.fileName);
    res.send("Archivo descargado");
  } catch (error) {
    res.send("Error al descargar archivo", error.message);
  }
});

module.exports = router;
