const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config');
require('./routes/product.route')(app);

app.listen(5000, () => {
    console.log("listening at port 5000")
});