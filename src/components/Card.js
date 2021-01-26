import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const CategoryCard = ({ header, color, pathName, data }) => {
    return (
        <div style={{ padding: '2%' }}>
            <Link to={{
                pathname: `/category/${pathName}`,
            }}>
                <Card
                    bg={color}
                    text='white'
                    style={{ width: '18rem' }}
                    className="mb-2"
                >
                    <Card.Body>
                        <Card.Title>{header}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>

        </div>
    )
}



export default CategoryCard
