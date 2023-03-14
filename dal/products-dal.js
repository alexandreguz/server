import connection from '../database/db.js';

const getAll = async () => {


    // return "hello dal"


    let result = {
        success: false,
        data: null
    }
    try {
        let res  = await connection.promise().query(
            'SELECT * FROM products' 
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

// const addMeetings = async (team_id, begin, end, description, place) => {
//     let result = {
//         success: false,
//         data: null
//     }
//     try {
//         let res = await connection.promise().query(
//             `insert into meetings(team_id, begin, end, description, place)
//             Values
//             ('${team_id}', '${begin}','${end}','${description}','${place}');`
//         )

//         result.success = true
//         result.data = res[0]
// console.log(result)
//         return result
//     } catch (err) {
//         result.success = false
//         result.data = err

//         return result
//     }
    
// }


export default {
    getAll,
    // addMeetings
}

