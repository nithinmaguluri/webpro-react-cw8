import React, { Component } from 'react';

class HelloWorld extends Component {
    render() {
        return (
            <h1 className="text-center mt-4">Hello, {this.props.name}</h1>
        );
    }
}

export default HelloWorld;