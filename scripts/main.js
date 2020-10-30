Highcharts.chart('line', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Monthly International Debt 2020'
    },
    subtitle: {
        text: 'Source: The World Bank'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'US$ Thousands'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: false
            },
            enableMouseTracking: true
        }
    },
    series: [{
        name: 'Interest',
        data: [15301, 633, 70094, 10719, 10936, 4893, 25166, 588, 68591, 693, 13300, 7147]
    }, {
        name: 'Principal',
        data: [27744, 13018, 102704, 6956, 6123, 23522, 29881, 11001, 102051, 7443, 6123, 14426]
    }]
});



Highcharts.chart('bar', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'International Debt Breakdown by Creditor Country for September 2020'
    },
    subtitle: {
        text: 'Source: The World Bank'
    },
    xAxis: {
        categories: ['Belarus', 'China', 'France', 'India', 'Japan', 'Russia', 'Saudi Arabia']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'US$ Thousands'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Interest',
        data: [0, 17340, 28, 0, 7900, 42441, 710]
    }, {
        name: 'Principal',
        data: [3125, 11136, 1206, 19253, 11549, 49131, 4560]

    }]
});
