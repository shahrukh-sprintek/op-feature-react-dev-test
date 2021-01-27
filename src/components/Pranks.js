import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Modal, Button, Card, InputGroup, FormControl, Row, Spinner, Col } from 'react-bootstrap'
import { connect, useDispatch } from 'react-redux'
import CategoryPagination from './CategoryPagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { searchPranks, fetchPranks } from '../redux/store/actions/category'





const Pranks = ({ pranks, loading, error, searchPranks, fetchPranks }) => {

    const searchWord = React.useRef()

    const dispatch = useDispatch()
    let history = useHistory();
    const location = useLocation()


    let back = e => {
        e.stopPropagation();
        history.goBack();
    };

    console.log(pranks)
    if (loading) {
        return (

            <Row>
                <Col></Col>
                <Col>
                    <Spinner animation="border" variant="primary" />

                </Col>
                <Col></Col>
            </Row>
        )
    } else if (pranks) {
        return (

            <Modal
                size="xl"
                show={true}
            >
                <Modal.Header closeButton onClick={back}>
                    <Modal.Title>{location.state.slug}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <CategoryPagination pages={pranks.totalPages} pageNumber={pranks.pageNumber} slug={location.state.slug} getPranks={pranks.category ? fetchPranks : searchPranks} word={searchWord.current} />
                        </Col>

                        <Col>
                            <InputGroup className="mb-3"

                            >
                                <FormControl
                                    onChange={(e) => { searchWord.current = e.target.value }}
                                    placeholder="Search"

                                />
                                <InputGroup.Prepend>
                                    <Button variant="primary">
                                        <FontAwesomeIcon
                                            icon={faSearch}
                                            onClick={() => dispatch(searchPranks(searchWord.current, location.state.slug, 6, 1))}


                                        /></Button>
                                </InputGroup.Prepend>
                            </InputGroup>
                        </Col>
                    </Row>

                    {pranks.category ?
                        <Row>
                            {pranks.category[0].app_prank_scripts.map(prankScript => (
                                <Col key={prankScript.id}>
                                    <Card
                                        bg='light'
                                        style={{ width: '18rem' }}
                                        className="mb-2"
                                    >
                                        <Card.Img variant="top" src={prankScript.img_url} />
                                        <Card.Body>
                                            <Card.Title>{prankScript.title}</Card.Title>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                        :

                        <Row>
                            {pranks.pranks.map(prankScript => (
                                <Col key={prankScript.id}>
                                    <Card
                                        bg='light'
                                        style={{ width: '18rem' }}
                                        className="mb-2"
                                    >
                                        <Card.Img variant="top" src={prankScript.img_url} />
                                        <Card.Body>
                                            <Card.Title>{prankScript.description}</Card.Title>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    }

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={back}>
                        Close
              </Button>
                </Modal.Footer>
            </Modal >

        )

    } else {
        return (
            <p>{error}</p>
        )
    }

}

const mapStateToProps = (state) => ({
    pranks: state.category.pranks,
    loading: state.category.loading,
    error: state.category.error
})

const mapDispatchToProps = (dispatch) => ({
    searchPranks: searchPranks,
    fetchPranks: fetchPranks,

})


export default connect(mapStateToProps, mapDispatchToProps)(Pranks)
