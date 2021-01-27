import React, { useEffect } from 'react'
import CategoryCard from './Card';
import { Row, Spinner, Col, Container } from 'react-bootstrap';
import CategoryPagination from './CategoryPagination'
import { connect, useDispatch } from 'react-redux'
import { fetchCategories } from '../redux/store/actions/category'


const IndexPage = ({ getCategories, categories, loading, error }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories(10, 1))

    }, [])

    if (loading) {
        return (
            <Row>
                <div style={{ margin: 'auto' }}>

                    <Spinner animation="border" variant="primary" />
                </div>

            </Row>

        )
    } else if (error) {
        return (
            <div style={{ margin: 'auto' }}>

                <p>{categories.error}</p>
            </div>
        )
    } else {
        return (
            <Container>
                <Row>
                    {categories.categories ? categories.categories.map(category => (
                        <CategoryCard category={category} key={category.id} />

                    )) : null}
                    {/* <CategoryCard pathName={'posts'} header={'Posts'} color="warning" /> */}
                </Row>
                <Row>
                    <CategoryPagination pages={categories.totalPages} pageNumber={parseInt(categories.pageNumber)} getCategories={getCategories} />

                </Row>
            </Container>

        )
    }


}

const mapStateToProps = (state) => ({
    categories: state.category.categories,
    loading: state.category.loading,
    error: state.category.error
})

const mapDispatchToProps = (dispatch) => ({
    getCategories: fetchCategories

})

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
