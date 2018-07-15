import React from 'react';
import { Link } from 'react-router-dom';
import { AreaChart, Area, linearGradient, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';
import moment from 'moment';

export default class Graph extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: moment.utc().format('MMM').toUpperCase(),
            click: false
        };
    }
    
    handleClick(month) {
        this.setState({
            name: month,
            click: true
        });
    }

    handleBackClick() {
        this.setState({
            click: false
        });
    }

	render () {
        let caloriesData;
        let dataArr = [];
        try {
            const limit = this.props.days;
            caloriesData = this.props.data.sort((a, b) => {return moment.utc(b.date).format('X') - moment.utc(a.date).format('X')});
            let currentDateLoop = moment.utc(caloriesData[0].date).format('YYYY-MM-DD');
            let index = 0;
            for (let i = 1; i <= limit; i++) {
                if (moment.utc(caloriesData[index].date).format('YYYY-MM-DD') === moment.utc(currentDateLoop).format('YYYY-MM-DD')) {
                    dataArr.push({
                        date: moment.utc(caloriesData[index].date).format('YYYY-MM-DD'),
                        calories: caloriesData[index].calories,
                        weight: caloriesData[index].weight,
                    })
                    index++
                } else {
                    dataArr.push({
                        date: moment.utc(currentDateLoop).format('YYYY-MM-DD'),
                        calories: null,
                        weight: null,
                    })
                }
                let day;
                if (parseInt(currentDateLoop.slice(8, 10)) > 1) {
                    day = moment.utc(currentDateLoop).format('YYYY-MM-') + String(parseInt(currentDateLoop.slice(8, 10)) - 1);
                } else if (parseInt(currentDateLoop.slice(5, 7)) > 1) {
                    let month = moment.utc(String(parseInt(currentDateLoop.slice(5, 7)) - 1)).format('MM-');
                    day = moment.utc(currentDateLoop).format('YYYY-') + month + moment.utc(month).daysInMonth();
                } else {
                    let year = moment.utc(String(parseInt(currentDateLoop.slice(0, 4)) - 1)).format('YYYY-');
                    let month = '12-';
                    day = year + month + moment.utc(month).daysInMonth();
                }
                currentDateLoop = day;
            }
        } catch(e) {}
            dataArr.reverse();
            return(
                <div>
                    <h2 className="chart__header">Progress Overview</h2>                    
                    <ResponsiveContainer minWidth={420} minHeight={300} maxWidth={1960} maxHeight={1280} className="linechart report__left">
                        <AreaChart 
                            // width={900} 
                            // height={375} 
                            data={dataArr}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            onClick={(e) => {         
                                if (e !== null) {
                                this.handleClick(e.activeLabel)
                                }   
                            }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis yAxisId="weight" domain={['dataMin-7', 'dataMax+7']}/>
                        <YAxis yAxisId="calories" domain={['dataMin-500', 'dataMax+500']}/>
                        <Tooltip cursor={false} />
                        <Legend 
                            height={36} 
                            iconType='rect'
                        />
                        <Area 
                            yAxisId="weight"
                            type="monotoneX" 
                            dataKey="weight" 
                            stroke="#64ff6c" 
                            fill="#64ff6c"
                            connectNulls={true}
                            dot={{ 
                                stroke: '#64ff6c', 
                                strokeWidth: 5
                            }}/>
                        <Area 
                            yAxisId="calories"
                            type="monotoneX" 
                            dataKey="calories" 
                            stroke="#5DADEE" 
                            fill="#5DADEE"
                            connectNulls={true}
                            dot={{ 
                                stroke: '#5DADEE', 
                                strokeWidth: 5
                            }}/>
                        </AreaChart>
                    </ResponsiveContainer>
                 </div>
             );
    }
}

