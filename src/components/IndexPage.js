import React, { useEffect } from 'react'
import CategoryCard from './Card';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux'
import { fetchCategories } from '../redux/store/actions/category'


const IndexPage = ({ getCategories, categories }) => {

    useEffect(() => {
        getCategories()

    }, [])

    return (
        <Row>
            {categories ? categories.map(category => (
                <CategoryCard key={category.id} pathName={category.slug} header={category.name} color="success" />

            )) : null}
            {/* <CategoryCard pathName={'posts'} header={'Posts'} color="warning" /> */}
        </Row>

    )
}

const mapStateToProps = (state) => ({
    categories: state.category.categories
})

const mapDispatchToProps = (dispatch) => ({
    getCategories: () => dispatch(fetchCategories())

})

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
