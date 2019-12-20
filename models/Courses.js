const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoursesSchema = Schema({
    nama: { type: String, required: true },
    harga: { type: Number, required: true },
    keterangan: { type: String, required: true }
});

const Courses = module.exports = mongoose.model('Courses', CoursesSchema);
