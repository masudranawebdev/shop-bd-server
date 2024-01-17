const express = require("express");
const { getAllCategory, postCategory, updateCategoryInfo, deleteACategoryInfo, getAllCategoryMatchMenu } = require("../controllers/category.controllers");
const verifyToken = require("../../middleware/verify.token");
// const { FileUploadHelper } = require("../../helpers/image.upload");
const router = express.Router();

// get post delete and update Category Item
router.route('/').get(getAllCategory).post(verifyToken, postCategory).patch(verifyToken, updateCategoryInfo).delete(verifyToken, deleteACategoryInfo)
// router.route('/').get(getAllCategory).post(verifyToken, FileUploadHelper.ImageUpload.fields([{ name: 'category_image', maxCount: 1 }]), postCategory).patch(verifyToken, FileUploadHelper.ImageUpload.fields([{ name: 'category_image', maxCount: 1 }]),updateCategoryInfo).delete(verifyToken, deleteACategoryInfo)


router.route('/menuId').get(getAllCategoryMatchMenu)

const CategoryRoutes = {
    router
};


module.exports = CategoryRoutes;