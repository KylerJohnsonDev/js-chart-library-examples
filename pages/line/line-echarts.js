function renderEChartsLineChart() {
  var echartsLine = echarts.init(document.getElementById('echarts-line'));
  echartsLine.setOption({
    xAxis: { type: 'category', data: ['A', 'B', 'C', 'D', 'E'] },
    yAxis: { type: 'value', max: 20 },
    series: [{ type: 'line', data: [12, 19, 3, 5, 2] }]
  });
}
