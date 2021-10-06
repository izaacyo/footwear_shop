const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");
require('dotenv').config()

const app = express();
app.use(bodyParser.json());


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB connection SUCCESS");
    } catch (error) {
        console.error("MongoDB connection FAIL");
        process.exit(1);
    }
};

connectDB()



const Product = mongoose.model(
    "products",
    new mongoose.Schema({
        _id: { type: String, default: shortid.generate },
        title: String,
        image: String,
        description: String,
        price: Number,
        availableSizes: [String],

    }))

app.get("/api/products", async (req, res) => {

    const products = await Product.find({});
    res.send(products);
})


app.post("/api/products", async (req, res) => {

    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
})

app.delete("/api/products/:id", async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id)
    res.send(deletedProduct)
})

const Order = mongoose.model(
    "order",
    new mongoose.Schema(
        {
            _id: {
                type: String,
                default: shortid.generate,
            },
            email: String,
            name: String,
            address: String,
            total: Number,
            cartItems: [{
                _id: String,
                title: String,
                price: Number,
                count: Number,
                availableSizes: [String],
            }
            ],
        },
        {
            timestamps: true,
        }
    )
);

app.post("/api/orders", async (req, res) => {
    if (
        !req.body.name ||
        !req.body.email ||
        !req.body.address ||
        !req.body.total ||
        !req.body.cartItems
    ) {
        return res.send({ message: "Data is required." });
    }
    const order = await Order(req.body).save();
    res.send(order);
});
app.get("/api/orders", async (req, res) => {
    const orders = await Order.find({});
    res.send(orders);
});
app.delete("/api/orders/:id", async (req, res) => {
    const order = await Order.findByIdAndDelete(req.params.id);
    res.send(order);
});

const port = process.env.PORT;
app.listen(3000, () => console.log(port))