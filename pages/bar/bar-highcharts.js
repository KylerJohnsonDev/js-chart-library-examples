function renderHighchartsBarChart() {
  Highcharts.chart('highcharts-bar', {
    chart: { type: 'column', height: 220, width: 320 },
    title: { text: null },
    xAxis: { categories: ['A', 'B', 'C', 'D', 'E'] },
    yAxis: { title: { text: null }, max: 20 },
    series: [{ name: 'Bar', data: [12, 19, 3, 5, 2] }]
  });
}
