import connection from '../database/db.js';

const getAll = async () => {

    let result = {
        success: false,
        data: null
    }
    try {
        let res  = await connection.promise().query(
            'SELECT * FROM orders_details' 
        )
        
        result.success = true
        result.data = res[0]

        return result
    } catch (err) {
        result.success = true
        result.data = err

        return result

    }
}

const addOrder = async (order_id, product_id, user_id) => {
    let result = {
        success: false,
        data: null
    }
    try {
        let res = await connection.promise().query(
            `insert into orders_details(order_id, product_id, user_id)
            Values
            ('${order_id}', '${product_id}','${user_id}');`
        )

        result.success = true
        result.data = res[0]
console.log(result)
        return result
    } catch (err) {
        result.success = false
        result.data = err

        return result
    }
    
}



export default {
    getAll,
    addOrder
}

