import express from 'express';
import cors from 'cors'
import { productsRouter } from './controllers/products-controller.js';
import { ordersRouter } from './controllers/orders-controler.js';


const app = express()
app.use(express.json())
app.use(cors())

app.use("/api", productsRouter)
app.use("/api", ordersRouter)



app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3002, () => {console.log("Listening to port 3002")})