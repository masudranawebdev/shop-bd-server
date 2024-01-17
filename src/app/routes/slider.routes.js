const express = require("express");
const { getAllSlider, postSlider, updateSliderInfo, deleteASliderInfo } = require("../controllers/slider.controllers");
const verifyToken = require("../../middleware/verify.token");
// const { FileUploadHelper } = require("../../helpers/image.upload");
const router = express.Router();

// get post delete and update Slider Item
router.route('/').get(getAllSlider).post(verifyToken,  postSlider).patch(verifyToken, updateSliderInfo).delete(verifyToken, deleteASliderInfo)
// router.route('/').get(getAllSlider).post(verifyToken, FileUploadHelper.ImageUpload.fields([{ name: 'slider', maxCount: 1 }]), postSlider).patch(verifyToken, FileUploadHelper.ImageUpload.fields([{ name: 'slider', maxCount: 1 }]), updateSliderInfo).delete(verifyToken, deleteASliderInfo)

const SliderRoutes = {
    router
};

module.exports = SliderRoutes;