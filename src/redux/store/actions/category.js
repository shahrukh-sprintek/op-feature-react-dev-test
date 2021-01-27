import types from '../../types/category'
import { getAllCategories, getCategoryPrank, getSearchedPranks } from '../../services/category'

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

export const fetchCategoryPrank = (pranks) => {
    return {
        type: types.FETCH_PRANKS_SUCCESS,
        payload: pranks
    }
}

export const searchPrankFromPranks = (pranks) => {
    return {
        type: types.SEARCH_PRANKS_SUCCESS,
        payload: pranks
    }
}

export const fetchCategoriesFailure = (error) => {
    return {
        type: types.FETCH_CATEGORIES_FAILURE,
        payload: error
    }
}

export const fetchCategories = (categoriesPerPage, pageNumber) => {
    return dispatch => {
        dispatch(fetchCategoriesRequest())
        getAllCategories(categoriesPerPage, pageNumber)
            .then(response => {
                const categories = response.data.result
                dispatch(fetchCategoriesSuccess(categories))

            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchCategoriesFailure(errorMsg))
            })
    }

}

export const fetchPranks = (slug, NumberOfPranks, pageNumber) => {
    return dispatch => {

        dispatch(fetchCategoriesRequest())
        getCategoryPrank(slug, NumberOfPranks, pageNumber)
            .then(response => {
                const category = response.data.result
                dispatch(fetchCategoryPrank(category))

            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchCategoriesFailure(errorMsg))
            })
    }

}

export const searchPranks = (searchWord, slug, numberOfPranks, pageNumber) => {
    return dispatch => {
        getSearchedPranks(searchWord, slug, numberOfPranks, pageNumber)
            .then(response => {
                const pranks = response.data.result
                console.log(pranks)
                dispatch(searchPrankFromPranks(pranks))

            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchCategoriesFailure(errorMsg))
            })
    }

}