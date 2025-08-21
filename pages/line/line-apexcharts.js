function renderApexChartsLineChart() {
  var options = {
    chart: { type: 'line', height: 220, width: 320 },
    series: [{ name: 'Line', data: [12, 19, 3, 5, 2] }],
    xaxis: { categories: ['A', 'B', 'C', 'D', 'E'] },
    yaxis: { max: 20 }
  };
  var chart = new ApexCharts(document.querySelector("#apexcharts-line"), options);
  chart.render();
}
