Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Strawberries', 'Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Andrea and Eddie\'s house'
      }
    },
    series: [{
      name: 'Andrea',
      data: [6, 1, 0, 4]
    }, {
      name: 'Eddie',
      data: [6, 5, 7, 3]
    }]
  });
