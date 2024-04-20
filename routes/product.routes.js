const { verifyAndAdmin } = require("../middlewares/jwt/verifyToken.js");
const router = require("express").Router();
const {
  addProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProduct,
  searchAllMatchingProduct,
  getAllProductByFilters
} = require("../controllers/product.controller.js");
// add
router.post("/", verifyAndAdmin, addProduct);

// update
router.patch("/:productId", verifyAndAdmin, updateProduct);

// delete
router.delete("/:productId", verifyAndAdmin, deleteProduct);

// get a product
router.get("/", getAllProduct);

// searching all matching product
router.get("/search", searchAllMatchingProduct);

// searching all matching product
router.get("/filter", getAllProductByFilters);

// get a product
router.get("/:productId", getProduct);
module.exports = router;
