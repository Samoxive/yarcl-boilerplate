import React, { Component } from 'react';
import { PieChart } from 'yarcl';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <PieChart data={[{label: 'Foo', value: 20}, {label: 'Bar', value: 30}]} />
            </div>
        );
    }
}

export default App;
