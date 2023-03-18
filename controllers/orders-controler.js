import express from 'express';
// import {getAll, addMeetings, getMeetingByTeamId} from '../bl/meetings-bl.js'
import {getAll, addOrder} from '../bl/orders-bl.js'

const ordersRouter = express.Router();

ordersRouter.get("/orders", async (req, res) => {
    let result = await getAll();
        res.send(result)
    
});



ordersRouter.post('/orders', async (req, res) => {
    console.log(req.body, "controller")

    let result = await addOrder(req.body);
    
    if (!result.success) {
        res.status(500).send(result)
    } else {
        result.data = {
            ...req.body,
            id: result.data.insertId
        }
        res.send(result)
    }
});


export {
    ordersRouter
}

