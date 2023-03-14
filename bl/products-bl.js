import productsDal from "../dal/products-dal.js"
// import teamsDal from "../dal/teams-dal.js"

const getAll = async() => {
    return await productsDal.getAll()
}

// const addMeetings = async (body) => {
//     return await meetingsDal.addMeetings(
//         body.team_id, body.begin, body.end, body.description, body.place,)
// }

// const getMeetingByTeamId = async (id) => {
//     let teams = await teamsDal.getAll()
//     let teamId = teams.data.find(team => team.team_id === id).team_id

//     let meetings = await (await meetingsDal.getAll()).data
//     let meetingsID = await meetings.filter(meeting => meeting.team_id === teamId)
//     console.log(meetingsID)

//     return meetingsID

//   }

const getProductsById = async (id) => {
    let products = await productsDal.getAll()
    let productsId = products.data.filter(products => products.id === id)

    return productsId
  }

export {
    getAll,
    // addMeetings,
    getProductsById
}
