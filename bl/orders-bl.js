import ordersDal from "../dal/orders-dal.js"

const getAll = async() => {
    return await ordersDal.getAll()
}

const addOrder = async(body) => {
    return await ordersDal.addOrder(
        body.order_id,  body.product_id, body.user_id
    )
}


export {
    getAll,
    addOrder
}
