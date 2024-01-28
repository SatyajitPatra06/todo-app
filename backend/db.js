const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://admin:BDJ9kefQYNJFITFI@cluster0.etha96d.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}