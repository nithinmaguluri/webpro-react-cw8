import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 5
        };
    }

    incrementCount = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <>
                <h1 className="text-center text-primary">{this.state.count}</h1>
                <div className="d-flex justify-content-center">
                    <Button onClick={() => this.incrementCount()} variant='warning'>
                        Increment Count
                    </Button>
                </div>
            </>
        );
    }
}

export default Counter;
