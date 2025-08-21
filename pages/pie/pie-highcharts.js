function renderHighchartsPieChart() {
  Highcharts.chart('highcharts-pie', {
    chart: { type: 'pie', height: 220, width: 320 },
    title: { text: null },
    series: [{
      name: 'Pie',
      colorByPoint: true,
      data: [
        { name: 'A', y: 12 },
        { name: 'B', y: 19 },
        { name: 'C', y: 3 },
        { name: 'D', y: 5 },
        { name: 'E', y: 2 }
      ]
    }]
  });
}
