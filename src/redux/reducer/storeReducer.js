import { fetchData } from "../../Service/service"


const FETCH_DATA = "FETCH_DATA"

const getDataFetched = data => {
    return {
        type: FETCH_DATA,
        payload: data
    }
}

export const fetchStoreData = (name) => {
    return (dispatch) => {
        fetchData()
            .then(response => {
                const user = response.data
                dispatch(getDataFetched(user))
            })
            .catch(error => {
                const errorMessage = error.message
                console.log(errorMessage + "error Message")
            })
    }
}

const initialState = {
    data: []
}

const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

export default storeReducer