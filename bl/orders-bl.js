import ordersDal from "../dal/orders-dal.js"

const getAll = async() => {
    return await ordersDal.getAll()
}

const addOrder = async(body) => {
    console.log(body, "product id - bl")
    return await ordersDal.addOrder(
        body.order_id,  body.product_id, body.user_id
    )
}

// pseudocode:
// 1) recebe lista dos produtos (products_ids) 
// 2) usar funcao getProductsQuantity para colocar em um objeto o produto e sua quantidade
// 3) criar uma order_id e assosciar a um user (user_id)
// 4) enviare ao DB product_details os produtos e suas quantidades com a order_id e user_id
 

const getProductsQuantity = (body) => {
        const product_id_list = body
        const orderDetails = {};
        product_id_list.forEach((product_id) => {
          orderDetails[product_id] = orderDetails[product_id] ? orderDetails[product_id] + 1 : 1;
        });
      
        return Object.keys(orderDetails).map((product_id) => ({
          value: parseInt(product_id),
          times: orderDetails[product_id],
        }));

}

export {
    getAll,
    addOrder
}
