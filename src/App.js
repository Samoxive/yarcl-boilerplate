import React, { Component } from 'react';
import { PieChart, LineChart, BarChart, AreaChart, BubbleChart } from 'yarcl';
import './App.css';

class App extends Component {
    state = {
        donut: false,
        dark: false,
    }

    render() {
        return (
            <div>
                <div style={{margin: '8px 8px 8px 8px'}}>
                    <button onClick={() => this.setState({...this.state, donut: !this.state.donut})}>
                        Toggle donut/pie chart
                    </button>
                    <button onClick={() => this.setState({...this.state, dark: !this.state.dark})}>
                        Toggle background
                    </button>
                </div>
                <div className="App" style={this.state.dark ? ({background: 'black'}) : ({background: 'white'})}>
                    <div className="chart">
                        <BarChart
                            title={'Population of largest Turkey cities (in millions)'}
                            subtitle={'according to 2015 estimates'}
                            label={['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Adana']}
                            data={[14000000, 4700000, 2800000, 1900000, 1600000]}
                        />
                    </div>
                    <div className="chart">
                        <PieChart
                            title={'Spread of population in top 5 districts in Kayseri '}
                            data={[
                                {label: 'Melikgazi', value: 562000},
                                {label: 'Kocasinan', value: 394000},
                                {label: 'Talas', value: 155000},
                                {label: 'Develi', value: 90000},
                                {label: 'Yahyalı', value: 36000},
                            ]}
                            options={{ isDonut: this.state.donut }}
                        />
                    </div>
                    <div className="chart">
                        <BarChartVertical
                            title={'Population of largest Turkey cities (in millions)'}
                            subtitle={'according to 2015 estimates'}
                            label={['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Adana']}
                            data={[14000000, 4700000, 2800000, 1900000, 1600000]}
                        />
                    </div>
                    <div className="chart">
                        <LineChart
                            title={{text: 'Population of countries by years (in millions)'}}
                            subtitle={{text: 'in 1950, 1965, 1980, 1995 and 2010'}}
                            yAxis={{title: {text: 'Population'}}}
                            plotOptions={{pointStart: 10}}
                            width={1000}
                            height={400}
                            series={[
                                {name: 'Turkey', data: [21, 30, 43, 58, 71]},
                                {name: 'Germany', data: [69, 75, 78, 81, 80]},
                                {name: 'Canada', data: [14, 19, 24, 29, 34]},
                                {name: 'Israel', data: [null, 2, 3, 5, 7]}
                            ]}
                        />
                    </div>
                    <div className="chart">
                        <StackedAreaChart
                            title="Population of countries by years (in millions)"
                            subtitle="in 1950, 1965, 1980, 1995 and 2010"
                            series={[
                                {label: 'Turkey', data: [21, 30, 43, 58, 71]},
                                {label: 'Germany', data: [69, 75, 78, 81, 80]},
                                {label: 'Canada', data: [14, 19, 24, 29, 34]},
                                {label: 'Israel', data: [null, 2, 3, 5, 7]}
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
                                {label: 'Canada', data: [14, 19, 24, 29, 34]},
                                {label: 'Israel', data: [null, 2, 3, 5, 7]}
                            ]}
                        />
                    </div>
                    <div className="chart">
                        <BubbleChart
                            title={{text: 'Sugar and fat intake per country'}}
                            subtitle={{text: 'data taken from https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/bubble/'}}
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
                    <div className="chart">
                        <HeatmapChart
                            title={{text:'Sales per employee per weekday'}}
                            xAxis={{categories:['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura']}}
                            yAxis={{categories:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']}}
                            width={900}
                            height={500}
                            series= {{
                                borderWidth: 0,
                                data: [
                                    [0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], 
                                    [0, 4, 67], [1, 0, 92], [1, 1, 58], [1, 2, 78], 
                                    [1, 3, 117], [1, 4, 48], [2, 0, 35], [2, 1, 15], 
                                    [2, 2, 123], [2, 3, 64], [2, 4, 52], [3, 0, 72], 
                                    [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16], 
                                    [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], 
                                    [4, 4, 115], [5, 0, 88], [5, 1, 32], [5, 2, 12], 
                                    [5, 3, 6], [5, 4, 120], [6, 0, 13], [6, 1, 44], 
                                    [6, 2, 88], [6, 3, 98], [6, 4, 96], [7, 0, 31], 
                                    [7, 1, 1], [7, 2, 82], [7, 3, 32], [7, 4, 30], 
                                    [8, 0, 85], [8, 1, 97], [8, 2, 123], [8, 3, 64], 
                                    [8, 4, 84], [9, 0, 47], [9, 1, 114], [9, 2, 31], 
                                    [9, 3, 48], [9, 4, 91]],
                                dataLabels: {
                                    enabled: true,
                                    color: 'black'
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
