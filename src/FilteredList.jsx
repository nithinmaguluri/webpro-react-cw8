import React, { Component } from 'react';
import List from './List';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownItem } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            filterType: 'All',
        };
    }

    onSearch = (event) => {
        this.setState({ search: event.target.value.toLowerCase() });
    };

    onDropdownSelect = (eventKey) => {
        this.setState({ filterType: eventKey });
    };

    filterItem = (item) => {
        const { search, filterType } = this.state;

        const searchMatch = item.name.toLowerCase().includes(search);
        const typeMatch =
            filterType === 'All' || item.type.toLowerCase() === filterType.toLowerCase();

        return searchMatch && typeMatch;
    };

    render() {
        const uniqueTypes = [...new Set(this.props.items.map((item) => item.type))];

        return (
            <Container>
                <Row className="justify-content-center mt-4">
                    <Col md={6}>
                        <h1 className="text-center">Produce Search</h1>
                        <Form.Group controlId="searchField">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                onChange={this.onSearch}
                            />
                        </Form.Group>

                        <Dropdown
                            onSelect={this.onDropdownSelect}
                            drop="down"
                        >
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Filter by Type: {this.state.filterType}
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{ display: 'block' }}>
                                <DropdownItem eventKey="All">All</DropdownItem>
                                {uniqueTypes.map((type) => (
                                    <DropdownItem key={type} eventKey={type}>
                                        {type}
                                    </DropdownItem>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>

                <Row className="justify-content-center mt-4">
                    <Col md={6}>
                        <List items={this.props.items.filter(this.filterItem)} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default FilteredList;
