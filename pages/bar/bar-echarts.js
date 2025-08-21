function renderEChartsBarChart() {
  var echartsBar = echarts.init(document.getElementById('echarts-bar'));
  echartsBar.setOption({
    xAxis: { data: ['A', 'B', 'C', 'D', 'E'], max: 4 },
    yAxis: { max: 20 },
    series: [{ type: 'bar', data: [12, 19, 3, 5, 2] }]
  });
}
