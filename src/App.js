import React, { Component } from 'react';
import { PieChart, LineChart, BarChart } from 'yarcl';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
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
                        options={{ showPercentage: true }}
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
            </div>
        );
    }
}

export default App;
