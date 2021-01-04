const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const SELECT_ALL_PRODUCTS_QUERY = "SELECT * FROM products";

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "$(Gitlit13)",
	database: "react_sql",
});

connection.connect((err) => {
	if (err) {
		return err;
	}
});


app.use(cors());

app.get("/", (req, res) => {
	res.send("Go to /products to see products");
});

app.get("/products", (req, res) => {
    connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    })
});

app.get("/products/add", (req, res) => {
    const {name, price} = req.query;
    console.log(name, price);
    const INSERT_PRODUCTS_QUERY = `INSERT INTO products (name, price) VALUES('${name}', ${price})`
    connection.query(INSERT_PRODUCTS_QUERY, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.send('successfully addded product')
        }
    })
});

app.get("/products/:product", (req,res) => {
    let name = req.params.product;
    console.log(name);
    const FIND_PRODUCT_QUERY = `SELECT * FROM products WHERE ?`
    connection.query(FIND_PRODUCT_QUERY, {name: name}, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json(results)
        }
    })
})

app.post("/products/:product/:price", (req,res) => {
    let name = req.params.product;
    let price = req.params.price;
    console.log(name);
    const UPDATE_PRODUCT_QUERY = `UPDATE products SET ? WHERE ?`
    connection.query(UPDATE_PRODUCT_QUERY, [ {price: price}, {name: name}], (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json(results)
        }
    })
})

app.delete("/products/:product", (req,res) => {
    let name = req.params.product;
    console.log(name);
    const DELETE_PRODUCT_QUERY = `DELETE FROM products WHERE ?`
    connection.query(DELETE_PRODUCT_QUERY, {name: name}, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json(results)
        }
    })
})

app.listen(4000, () => {
	console.log(`http://localhost:4000`);
});

