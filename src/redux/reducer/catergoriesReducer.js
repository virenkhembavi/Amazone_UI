import { fetchDataByCategories } from "../../Service/service"


const FETCH_DATA = "FETCH_DATA"

const getDataFetched = data => {
    return {
        type: FETCH_DATA,
        payload: data
    }
}

export const fetchStoreDataByCateg = (name) => {
    return (dispatch) => {
        fetchDataByCategories()
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

const categoriesReducer = (state = initialState, action) => {
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

export default categoriesReducer