import React, { Component } from 'react';
import { PieChart, LineChart, BarChart, AreaChart, BubbleChart } from '../../yarcl';
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
                <div className="chart">
                    <BubbleChart
                        title={{text: 'BUBBLE'}}
                        subtitle={{text: 'chart'}}
                        xAxis={{
                            gridLineWidth: 1,
                            per: 'day',
                            plotLines: [{
                                color: 'black',
                                dashStyle: '4, 4, 8, 4',
                                label:{
                                    text: 'Safe fat intake ',
                                    x: 0,
                                    y: 0
                                },
                                value: 200,
                                width: 1
                            }],
                            title:{text: 'Daily fat intake'},
                            unitName: 'gr'
                        }}
                        yAxis={{
                            gridLineWidth: 1,
                            per: 'day',
                            plotLines:[{
                                color: 'black',
                                dashStyle: '4, 4',
                                label:{
                                    text: 'Safe sugar intake ',
                                    x: 0,
                                    y: 0
                                },
                                value: 80,
                                width: 1
                            }],
                            title:{text: 'Daily sugar intake'},
                            unitName: 'gr'
                        }}
                        width={1000}
                        height={550}
                        series={[
                            { x: 85.1, y: 305.1, z: 50.8, shortName: 'BE', fullName: 'Belgium       ' },
                            { x: 86.5, y: 102.9, z: 14.7, shortName: 'DE', fullName: 'Germany       ' },
                            { x: 80.8, y: 191.5, z: 15.8, shortName: 'FI', fullName: 'Finland       ' },
                            { x: 80.4, y: 102.5, z: 12.1, shortName: 'NL', fullName: 'Netherlands   ' },
                            { x: 80.3, y: 186.1, z: 11.8, shortName: 'SE', fullName: 'Sweden        ' },
                            { x: 78.4, y: 170.1, z: 16.6, shortName: 'ES', fullName: 'Spain         ' },
                            { x: 74.2, y: 168.5, z: 14.5, shortName: 'FR', fullName: 'France        ' },
                            { x: 73.5, y: 183.1, z: 10.1, shortName: 'NO', fullName: 'Norway        ' },
                            { x: 71.1, y: 193.2, z: 24.7, shortName: 'UK', fullName: 'United Kingdom' },
                            { x: 69.2, y: 157.6, z: 10.4, shortName: 'IT', fullName: 'Italy         ' },
                            { x: 68.6, y: 120.1, z: 16.1, shortName: 'RU', fullName: 'Russia        ' },
                            { x: 65.5, y: 126.4, z: 35.3, shortName: 'US', fullName: 'United States ' },
                            { x: 65.4, y: 150.8, z: 28.5, shortName: 'HU', fullName: 'Hungary       ' },
                            { x: 63.4, y: 151.8, z: 15.4, shortName: 'PT', fullName: 'Portugal      ' },
                            { x: 64.1, y: 182.9, z: 31.3, shortName: 'NZ', fullName: 'New Zealand   ' }
                        ]}
                    />
                </div>
            </div>
        );
    }
}

export default App;
