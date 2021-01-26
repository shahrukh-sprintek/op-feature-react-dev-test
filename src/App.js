import React from 'react'
import Pranks from './components/Pranks'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, useLocation } from 'react-router-dom'
import IndexPage from './components/IndexPage';
import { Container, Row } from 'react-bootstrap';


function App({ fetchUsers }) {
  // useEffect(() => {
  //   fetchUsers()
  // }, [fetchUsers])
  // let location = useLocation();

  // let background = location.state && location.state.background;


  return (

    <Container>

      <Switch>

        <Route exact path="/" component={IndexPage} />

      </Switch>

      <Route path="/category/:slug" component={Pranks} />

    </Container >

  );
}




export default App;
