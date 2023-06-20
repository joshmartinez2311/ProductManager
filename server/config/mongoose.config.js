const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/product", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("establish a connection to the database"))
    .catch(err => console.log("something went wrong when connecting tot the database", err));