import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class List extends Component {
    renderList() {
        const items = this.props.items.map(item => (
            <ListGroup.Item key={item.name}>
                {item.name}
            </ListGroup.Item>
        ));
        return items;
    }

    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>Produce List</Card.Title>
                    <ListGroup>
                        {this.renderList()}
                    </ListGroup>
                </Card.Body>
            </Card>
        );
    }
}

export default List;
