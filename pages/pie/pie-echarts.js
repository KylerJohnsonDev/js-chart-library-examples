function renderEChartsPieChart() {
  var echartsPie = echarts.init(document.getElementById('echarts-pie'));
  echartsPie.setOption({
    series: [{
      type: 'pie',
      data: [
        { value: 12, name: 'A' },
        { value: 19, name: 'B' },
        { value: 3, name: 'C' },
        { value: 5, name: 'D' },
        { value: 2, name: 'E' }
      ]
    }]
  });
}
