import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { connect, useDispatch } from 'react-redux'
import { fetchPranks } from '../redux/store/actions/category'


const CategoryCard = ({ category }) => {
    const dispatch = useDispatch();

    return (
        <div style={{ padding: '2%' }}>
            <Link onClick={
                () => { dispatch(fetchPranks(category.slug, 6, 1)) }

            } to={{
                pathname: `/category/${category.slug}`,
                state: { slug: category.slug }
            }}>
                <Card
                    bg='light'
                    style={{ width: '11rem', height: '14rem' }}
                    className="mb-4"
                >
                    <Card.Img src={category.img_url} variant="top" height="120rem" />

                    <Card.Body>
                        <Card.Title>{category.name}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    fetchPranks: fetchPranks
})



export default connect(null, mapDispatchToProps)(CategoryCard)
