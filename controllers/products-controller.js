import express from 'express';
// import {getAll, addMeetings, getMeetingByTeamId} from '../bl/meetings-bl.js'
import {getAll, getProductsById} from '../bl/products-bl.js'

const productsRouter = express.Router();

productsRouter.get("/products", async (req, res) => {
    let result = await getAll();
        res.send(result)
    
});

productsRouter.get("/products/:id", async (req, res) => {
    let id  = +req.params.id
    let result = await getProductsById(id);
    // let result = "await getProductsById(id);"

        res.send(result)
    
});
 
// productsRouter.post('/meetings', async (req, res) => {
//     let result = await addMeetings(req.body);
    
//     if (!result.success) {
//         res.status(500).send(result)
//     } else {
//         result.data = {
//             ...req.body,
//             id: result.data.insertId
//         }
//         res.send(result)
//     }
// });

export {
    productsRouter
}

