import types from '../../types/category';

const initialState = {
    categories: [],
    pranks: [],
    loading: false,
    error: ''
}

const category = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_CATEGORIES_REQUEST:
            return {
                ...state,
                loading: true

            }

        case types.FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case types.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload

            }

        case types.FETCH_PRANKS_SUCCESS:
            return {
                ...state,
                loading: false,
                pranks: action.payload
            }

        default:
            return state

    }

}

export default category