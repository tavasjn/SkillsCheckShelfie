require('dotenv').config();
const express = require('express');
const massive = require('massive');
const ctrl = require('./controller');


const app = express();
app.use(express.json());

const { SERVER_PORT, CONNECTION_STRING } = process.env

massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
        app.listen(SERVER_PORT, console.log(`Magic is on Port ${SERVER_PORT}`))
        console.log('db connected')
    })
    .catch(err => console.log(err))


// EndPoints // 

app.get('/api/products', ctrl.getProducts)
// console.log(products)
app.post('/api/products', ctrl.addProduct)
app.put('/api/products/:id', ctrl.updateProduct)
app.delete('/api/products/:id', ctrl.deleteProduct)




// Server Port Listening //

