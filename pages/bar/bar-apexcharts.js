function renderApexChartsBarChart() {
  var options = {
    chart: { type: 'bar', height: 220, width: 320 },
    series: [{ name: 'Bar', data: [12, 19, 3, 5, 2] }],
    xaxis: { categories: ['A', 'B', 'C', 'D', 'E'] },
    yaxis: { max: 20 }
  };
  var chart = new ApexCharts(document.querySelector("#apexcharts-bar"), options);
  chart.render();
}
