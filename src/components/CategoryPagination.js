import React from 'react'
import { useDispatch } from 'react-redux'
import { Pagination } from 'react-bootstrap'
import { fetchPranks } from '../redux/store/actions/category'

const CategoryPagination = ({ pages, getCategories, pageNumber, slug, getPranks, word }) => {

    const dispatch = useDispatch()

    const PaginationRender = () => {
        const page = []
        for (let i = 0; i < pages; i++) {
            page[i] = i + 1
        }
        return page
    }

    console.log(pages, slug, pageNumber)
    return (
        <div style={{ margin: 'auto' }}>
            <Pagination>
                {PaginationRender().map(numberOfPage => (
                    <Pagination.Item key={numberOfPage} active={numberOfPage === parseInt(pageNumber)} onClick={() => { getCategories ? dispatch(getCategories(10, numberOfPage)) : word ? dispatch(getPranks(word, slug, 6, numberOfPage)) : dispatch(getPranks(slug, 6, numberOfPage)) }}>{numberOfPage}</Pagination.Item>

                ))}

                {/* // <Pagination.Ellipsis />

                // <Pagination.Item active>{12}</Pagination.Item> */}



            </Pagination>
        </div>
    )
}

export default CategoryPagination
