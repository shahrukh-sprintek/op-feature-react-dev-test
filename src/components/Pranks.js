import React from 'react'
import { useHistory } from 'react-router-dom'
import { Modal, Button, Card, InputGroup, FormControl, Row } from 'react-bootstrap'
import { connect, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { fetchPranks } from '../redux/store/actions/category'



const Pranks = ({ pranks, fetchPranks, match, loading }) => {

    const dispatch = useDispatch();
    let history = useHistory();
    console.log(loading)
    React.useEffect(() => {
        dispatch(fetchPranks(match.params.slug))
    }, [])

    let back = e => {
        e.stopPropagation();
        history.goBack();
    };

    if (loading) {
        return (
            <p>loading</p>
        )
    } else if (pranks) {
        return (

            <Modal show={true} >
                <Modal.Header closeButton onClick={back}>
                    <Modal.Title>{pranks.slug}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Search"

                        />
                        <InputGroup.Prepend>
                            <Button variant="primary"><FontAwesomeIcon icon={faSearch} /></Button>
                        </InputGroup.Prepend>
                    </InputGroup>


                    <Row>
                        {pranks.app_prank_scripts.map(prankScript => (
                            <Card
                                key={prankScript.id}
                                bg='light'
                                style={{ width: '18rem' }}
                                className="mb-2"
                            >
                                <Card.Body>
                                    <Card.Title>{prankScript.description}</Card.Title>

                                </Card.Body>
                            </Card>
                        ))}
                    </Row>

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
            <p>Error</p>
        )
    }

}

const mapStateToProps = (state) => ({
    pranks: state.category.pranks[0],
    loading: state.category.loading,
})

const mapDispatchToProps = (dispatch) => ({
    fetchPranks: fetchPranks
})

export default connect(mapStateToProps, mapDispatchToProps)(Pranks)
