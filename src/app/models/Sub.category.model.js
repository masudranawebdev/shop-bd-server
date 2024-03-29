const mongoose = require("mongoose");

// Sub_Category Schema and connect DB collection
const sub_categorySchema = new mongoose.Schema({
    sub_category: {
        type: String,
        required: true,
    },
    sub_category_image: {
        type: String,
        required: true,
    },
    menuId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'menus',
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories',
    },
    slug: {
        type: String,
        required: true
    }
},
{
    timestamps: true
})

const Sub_CategoryModel = mongoose.model("subcategories", sub_categorySchema);

module.exports = Sub_CategoryModel;