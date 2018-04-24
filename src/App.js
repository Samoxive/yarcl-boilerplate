import React, { Component } from 'react';
import { PieChart, LineChart, BarChart, AreaChart } from '../../yarcl';
import './App.css';

class App extends Component {
    state = {
        donut: false,
        dark: false,
    }

    render() {
        return (
            <div className="App" style={this.state.dark ? ({background: 'black'}) : ({background: 'white'})}>
                <div style={{margin: '8px 400px 8px 400px'}}>
                    <button onClick={() => this.setState({...this.state, donut: !this.state.donut})}>
                        Toggle donut/pie chart
                    </button>
                    <button onClick={() => this.setState({...this.state, dark: !this.state.dark})}>
                        Toggle background
                    </button>
                </div>
                <div class="chart">
                    <BarChart
                        title={'Population of largest Turkey cities (in millions)'}
                        subtitle={'according to 2015 estimates'}
                        label={['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Adana']}
                        data={[14000000, 4700000, 2800000, 1900000, 1600000]}
                    />
                </div>
                <div class="chart">
                    <PieChart
                        title={'Spread of population in top 5 districts in Kayseri '}
                        data={[
                            {label: 'Melikgazi', value: 562000},
                            {label: 'Kocasinan', value: 394000},
                            {label: 'Talas', value: 155000},
                            {label: 'Develi', value: 64000},
                            {label: 'Yahyalı', value: 36000},
                        ]}
                        options={{ showPercentage: true, isDonut: this.state.donut }}
                    />
                </div>
                <div style={{margin: '8px 8px 8px 8px'}}>
                    <LineChart
                        title={{text: 'Population of some countries by years (in millions)'}}
                        subtitle={{text: 'in 1990, 2000, 2015'}}
                        yAxis={{title: {text: 'Population'}}}
                        plotOptions={{pointStart: 10}}
                        width={1000}
                        height={400}
                        series={[
                            {name: 'Russia', data: [148, 146, 144]},
                            {name: 'Germany', data: [79, 82, 81]},
                            {name: 'Turkey', data: [54, 63, 78] },
                            {name: 'United Kingdom', data: [57, 58, 65]}
                        ]}
                    />
                </div>
                <div className="chart">
                    <AreaChart
                        title="Population of countries by years (in millions)"
                        subtitle="in 1950, 1965, 1980, 1995 and 2010"
                        series={[
                            {label: 'Turkey', data: [21, 30, 43, 58, 71]},
                            {label: 'Germany', data: [69, 75, 78, 81, 80]},
                            {label: 'Canada', data: [14, 19, 24, 29, 34]}
                        ]}
                    />
                </div>
            </div>
        );
    }
}

export default App;
