import types from '../../types/category'
import { getAllCategories, getCategoryPrank } from '../../services/category'

export const fetchCategoriesRequest = () => {
    return {
        type: types.FETCH_CATEGORIES_REQUEST
    }
}

export const fetchCategoriesSuccess = (categories) => {
    return {
        type: types.FETCH_CATEGORIES_SUCCESS,
        payload: categories
    }
}

export const fetchCategorieyPrank = (pranks) => {
    return {
        type: types.FETCH_PRANKS_SUCCESS,
        payload: pranks
    }
}

export const fetchCategoriesFailure = (error) => {
    return {
        type: types.FETCH_CATEGORIES_FAILURE,
        payload: error
    }
}

export const fetchCategories = () => {
    return dispatch => {
        dispatch(fetchCategoriesRequest)
        getAllCategories()
            .then(response => {
                const categories = response.data.result.categories
                dispatch(fetchCategoriesSuccess(categories))

            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchCategoriesFailure(errorMsg))
            })
    }

}

export const fetchPranks = (slug) => {
    return dispatch => {
        dispatch(fetchCategoriesRequest)
        console.log(slug)
        getCategoryPrank(slug)
            .then(response => {
                const category = response.data.result.categories
                dispatch(fetchCategorieyPrank(category))

            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchCategoriesFailure(errorMsg))
            })
    }

}