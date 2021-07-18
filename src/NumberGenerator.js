import React, { Component } from 'react';
import Ball from './Ball';
import './NumberGenerator.css';

class NumberGenerator extends Component {
    
    static defaultProps = {
        title: 'Main Number Generator',
        maxBalls: 6,
        maxNumber: 40
    }


    constructor(props) {
        super(props);
        this.state={
            numbers: Array.from({length: this.props.maxBalls})
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    generateNumbers() {
        this.setState(currentState => ({
            numbers: currentState.numbers.map(n => Math.floor(Math.random() * this.props.maxNumber) + 1)
        }));
    }

    handleClick(e) {
        this.generateNumbers();
    }
    
    render() {
        return(
            <section className="NumberGenerator">
                <h1 className="NumberGenerator-title">{this.props.title}</h1>
                <div>
                    {this.state.numbers.map(n => (
                        <Ball number={n}/>
                    ))}
                </div>
                <button className="NumberGenerator-button" onClick={this.handleClick}>Generate numbers</button>
            </section>
        );
    }
}

export default NumberGenerator;