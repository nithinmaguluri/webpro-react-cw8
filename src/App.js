import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import Counter from './Counter';
import FilteredList from './FilteredList';
import { Container, Row, Col } from 'react-bootstrap';

const produce = [
  {name: "Apple", type: "Fruit"},
  {name: "Pineapple", type: "Fruit"} ,
  {name: "Banana", type: "Fruit"},
  {name: "Pear", type: "Fruit"},
  {name: "Strawberry", type: "Fruit"},
  {name: "Orange", type: "Fruit"},
  {name: "Lettuce", type: "Vegetable"},
  {name: "Cucumber", type: "Vegetable"},
  {name: "Eggplant", type: "Vegetable"},
  {name: "Squash", type: "Vegetable"},
  {name: "Bell pepper", type: "Vegetable"},
  {name: "Onion", type: "Vegetable"},
 ];

class App extends Component {
  render() {
    return (
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <HelloWorld name={'Nithin'} />
            <Counter />
            <FilteredList items={produce} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
