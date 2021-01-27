import API from './api'

export function getAllCategories(categoriesPerPage, pageNumber) {
    return API.get(`/api/get/categories/${categoriesPerPage}/${pageNumber}`,
        {
            headers: {
                'Authorization': process.env.REACT_APP_HEADER_ACCESS_TOKEN
            }
        });
}

export function getCategoryPrank(slug, numberOfPranks, pageNumber) {
    return API.get(`/api/get/category/pranks/${slug}/${numberOfPranks}/${pageNumber}`,
        {
            headers: {
                'Authorization': process.env.REACT_APP_HEADER_ACCESS_TOKEN
            }
        });
}

export function getSearchedPranks(word, slug, pranksPerPage, pageNumber) {
    return API.get(`/api/get/category/pranks/${slug}/${word}/${pranksPerPage}/${pageNumber}`,
        {
            headers: {
                'Authorization': process.env.REACT_APP_HEADER_ACCESS_TOKEN
            }
        });
}
