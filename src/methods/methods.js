const moment = require('moment');

function calculateTDEE(data) {
    const estimationsArr = [];

    for (let i=1; i<data.length; i++) {
        const weightCaloricFlux = (data[i].weight - data[i-1].weight) * 3500
        const avgCalorieFlux = weightCaloricFlux / relativeTime(data[i].date, data[i-1].date)
        const estimatedTDEE = ((data[i].calories + data[i-1].calories) / 2) + avgCalorieFlux 
        estimationsArr.push(estimatedTDEE)
    }
    const result = (estimationsArr.reduce((a, b) => a+b)) / estimationsArr.length
    return result
}


function relativeTime(dayOne, dayTwo) {
    const cryptoDateOne = (parseInt(moment(dayOne).format('YYYY')) * 365) + parseInt(moment(dayOne).format('DDD'));
    const cryptoDateTwo = (parseInt(moment(dayTwo).format('YYYY')) * 365) + parseInt(moment(dayTwo).format('DDD'));
    return cryptoDateOne - cryptoDateTwo
}


relativeTime("2017-11-18T00:00:00.000Z", "2017-11-24T00:00:00.000Z")

calculateTDEE([{date: "2017-11-18T00:00:00.000Z", weight: 179, calories: 3037}, {date: "2017-11-25T00:00:00.000Z", weight: 180, calories: 3007}, {date: "2017-12-02T00:00:00.000Z", weight: 181, calories: 3337}])