var{model, Schema} = require("mongoose");

var postSchema = Schema({
    title: String,
    author: String,
    post_date: {
        type: Date,
        default: Date.now
    },
    post_data: String
});

module.exports = model('posts', postSchema);